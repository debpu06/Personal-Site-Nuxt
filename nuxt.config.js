const contentful = require('contentful')
let config
try {
  // Load the Contentful config from the .contentful.json
  config = require('./.contentful.json')
} catch (_) {}

module.exports = {
  modules: [
    '@nuxtjs/feed',
    '@nuxtjs/google-analytics', { ua: process.env.ANALYTICS_ID }
  ],
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  feed: [{
    path: '/rss.xml',
    async create(feed) {
      let space = process.env.CTF_SPACE_ID || config.CTF_SPACE_ID
      let accessToken = process.env.CTF_CDA_ACCESS_TOKEN || config.CTF_CDA_ACCESS_TOKEN
      let siteUrl = process.env.SITE_BASE_URL || config.SITE_BASE_URL
      feed.options = {
        title: 'David Boland',
        link: siteUrl,
        description: 'Site dedicated to blogging about tech and personal projects',
      }
      
      client = contentful.createClient({ space: space, accessToken: accessToken })

      await client.getEntries({
        'content_type': 'blogPost',
        order: '-sys.createdAt'
      }).then(function (posts) {
        posts.items.forEach(post => {
          feed.addItem({
            title: post.fields.title,
            description: post.fields.description,
            id: post.sys.id,
            link: siteUrl + '/blog/' + post.fields.slug,
            content: post.fields.body
          })

          // feed.addCategory('funny')

          // feed.addContributor({
          //   // some details
          // })
        })
      })
    },
    cacheTime: 1000 * 60 * 15,
    type: 'rss2'
  }
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'David Boland',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Site dedicated to blogging about tech and personal projects' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css' },
      { href: 'https://fonts.googleapis.com/css?family=Open+Sans', rel: 'stylesheet' },
      { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet' }
    ],
    bodyAttrs: {
      class: ''
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID || config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN || config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: process.env.CTF_PERSON_ID || config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID || config.CTF_BLOG_POST_TYPE_ID
  },

  generate: {
    routes: function() {
      // get all blog posts
      return client.getEntries({ content_type: 'blogPost' })
        .then((entries) => {
          return entries.items.map((entry) => {
            return {
              route: `/blog/${entry.fields.slug}/`,
              payload: entry
            }
          })
        })
    }
  }
}


const contentful = require('contentful')
const config = require('./.contentful.json')
//const axios = require('axios')

module.exports = {
  modules: [
    // Simple usage
    '@nuxtjs/feed',
  ],
  feed: [{
    path: '/rss.xml', // The route to your feed.
    async create(feed) {
      feed.options = {
        title: 'title',
        description: 'describtion',
      }

      console.log("IN FEED")
      client = contentful.createClient({ space: '9usgdrjsks5w', accessToken: '7d2b49e1944191181b9af6fc9423f223158a395fdec3ea177df1d846c5473d2b' })


      await client.getEntries({
        'content_type': 'blogPost',
        order: '-sys.createdAt'
      }).then(function (posts) {
        console.log("All Items", posts)
        posts.items.forEach(post => {
          console.log("Item Title", post.fields.title)
          feed.addItem({
            title: post.fields.title,
            description: post.fields.description,
            id: post.sys.id,
            link: post.fields.slug,
            content: post.fields.body
          })
          console.log(feed)
          // feed.addCategory('funny')

          // feed.addContributor({
          //   // some details
          // })
        })
      })
      console.log("RETURNING")




    },
    cacheTime: 1000 * 60 * 15,
    type: 'rss2'
  }
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'personal-site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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
    CTF_SPACE_ID: process.env.CONTENTFUL_SPACE_ID || config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN || config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: process.env.CTF_PERSON_ID || config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID || config.CTF_BLOG_POST_TYPE_ID
  },
}


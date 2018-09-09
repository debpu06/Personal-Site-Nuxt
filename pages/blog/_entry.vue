<template>
<div>
    <Navbar></Navbar>
  <div class="container">
        <!-- START ARTICLE FEED -->
        <section class="articles">
            <div class="column is-8 is-offset-2">
                <!-- START ARTICLE -->
                <div class="card article">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content has-text-centered">
                                <p class="title article-title"> {{ blogPost.fields.title }}</p>
                                <div class="tags has-addons level-item">
                                    <span classs="tag is-link"> {{ (new Date(blogPost.fields.publishDate).toLocaleDateString('en-US')) }} </span>
                                </div>
                                <div class="media-content has-text-right">
                                  <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                </div>
                            </div>
                        </div>
                        <div class="content article-body">
                            <vuemarkdown :source="blogPost.fields.body"></vuemarkdown>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </div>
</div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import vuemarkdown from 'vue-markdown'
import Navbar from '~/components/NavBar'

const client = createClient()
export default {
  asyncData({ params, error, payload }) {
    if (payload) return {
      blogPost: payload
    };

    return Promise.all([
    client.getEntries({
        'fields.slug': params.entry,
        'content_type': 'blogPost'
      })
    ])
    .then(entries => {
        if (entries.total == 1) return {
            blogPost: entries.items[0]
        }
    }).catch(console.error)
  },
  head () {
    return {
        title: `${this.blogPost.fields.title} | David Boland`,
        meta: [
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: "@debpu06" },
            { property: "og:title", content: `${this.blogPost.fields.title}` },
            { property: 'og:description', content: `${this.blogPost.fields.description}` },
            { property: 'og:url', content: `~/blog/${this.blogPost.fields.slug}/`},
            { property: 'og:type', content: "website" }
        ]
    }
  },
  components: {
    vuemarkdown,
    Navbar
  }
}
</script>
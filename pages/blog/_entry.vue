<template>
<div>
    <Navbar></Navbar>
    <section class="hero is-medium is-primary is-bold">
        <div class="hero-body has-text-centered" >
            <div class="container">
            <h1 class="title blogHeading">
                {{ blogPost.fields.title }}
            </h1>
            <h2 class="subtitle blogHeading">
                {{ (new Date(blogPost.fields.publishDate).toLocaleDateString('en-US')) }}
            </h2>
            </div>
        </div>
    </section>
    <div style="background-color:#FFF">
        <div class="container">
            <!-- START ARTICLE FEED -->
            <section class="articles" role="main">
                <div class="column is-10 is-offset-1">
                    <!-- START ARTICLE -->
                    <div class="article">
                        <!-- <div class="card-content"> -->
                            <div class="media">
                                <div class="media-content has-text-centered">
                                    <p class="title article-title"> </p>
                                    <div class="tags has-addons level-item">
                                        <span classs="tag is-link">  </span>
                                    </div>
                                    <div class="media-content has-text-right">
                                    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                    </div>
                                </div>
                            </div>
                            <div class="content article-body">
                                <vuemarkdown :source="blogPost.fields.body"></vuemarkdown>
                            </div>
                        <!-- </div> -->
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import vuemarkdown from 'vue-markdown'
import Navbar from '~/components/NavBar'
import Prism from'prismjs'
import "prismjs/components/prism-csharp"


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
    ]).then(([entries]) => {
        if (entries.total == 1) return {
            blogPost: entries.items[0],
            
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
            { name: 'description', content: `${this.blogPost.fields.description}` },
            { name: 'keywords', content: `${this.blogPost.fields.tags.join(',')}` },
            { property: 'og:url', content: `~/blog/${this.blogPost.fields.slug}/`},
            { property: 'og:type', content: "website" }
        ]
    }
  },
  mounted() {
    Prism.highlightAll();
  },
  components: {
    vuemarkdown,
    Navbar,
    Prism
  }
}
</script>


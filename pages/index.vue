<template>
  <section class="section">
    <div class="container">
        <!-- <form action="/searchBlog/" method="post">
            <div class="field">
                <div class="columns">
                    <div class="control column is-one-third is-offset-one-third">
                        <input id="searchTerm" type="text" name="searchTerm" placeholder="search" class="input is-light is-bold is-medium is-rounded">
                    </div>
                </div>
            </div>
        </form> -->
        <div class="columns">
            <div class="column is-2">
                <aside class="menu">
                    <div class="box">
                        <p class="menu-label">Topics</p>
                        <ul class="menu-list">
                            <li>cat1 </li>
                            <li>cat2 </li>
                            <li>cat3 </li>
                            <li>cat4 </li>
                            <li>cat5 </li>
                        </ul>
                    </div>
                </aside>
            </div>
            <div class="column is-one-half">
                <div class="tile is-ancestor">
                    <div class="tile is-parent is-vertical">
                            <div v-for="post in posts" :key="post.sys.id" class="tile is-parent">
                                <nuxt-link v-bind:to="'blog/'+post.fields.slug">
                                    <article class="tile is-child box">
                                        <p class="title">{{post.fields.title}}</p>
                                        <p class="subtitle">{{post.fields.description}}</p>
                                        <span  v-for="tag in post.fields.tags" :key="tag" class="tag is-dark">{{tag}}</span>
                                    </article>
                                  </nuxt-link>
                            </div>
                    </div>
                </div>
            </div>
            <div class="column is-2">
                
            </div>
        </div>
    </div>
    </section>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import vuemarkdown from 'vue-markdown'
  const client = createClient()

  export default {
    // `env` is available in the context object
    asyncData ({env}) {
      console.log("QUERY CONTENTFUL")
      return Promise.all([
        // fetch the owner of the blog
        // client.getEntries({
        //   'sys.id': env.CTF_PERSON_ID
        // }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        })
      ]).then(([posts]) => {
        // return data that should be available
        // in the template
        return {
          posts: posts.items
        }
      }).catch(console.error)
    },
    components: {
      vuemarkdown
    }
  }
</script>
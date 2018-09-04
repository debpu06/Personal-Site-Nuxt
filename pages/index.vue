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
                            <li v-for="tag in tags" :key="tag" >
                              <a>
                                <span class="tag is-light">
                                  {{tag}}
                                </span>
                              </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
            <div class="column is-7">
                <div class="tile is-ancestor">
                    <div class="tile is-parent is-vertical">
                            <div v-for="post in posts" :key="post.sys.id" class="tile is-parent">
                                <nuxt-link v-bind:to="'blog/'+post.fields.slug+'/'">
                                    <article class="tile is-child box">
                                        <p class="title">{{post.fields.title}}</p>
                                        <p class="subtitle">{{post.fields.description}}</p>
                                        <div class="tags">
                                          <span v-for="tag in post.fields.tags" :key="tag" class="tag is-dark">{{tag}}</span>
                                        </div>
                                    </article>
                                  </nuxt-link>
                            </div>
                    </div>
                </div>
            </div>
            <div class="column is-3">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <!-- <div class="media-left">
                        <figure class="image is-48x48">
                          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                        </figure>
                      </div> -->
                      <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>

                    <div class="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris. 
                      <br><br>
                      <nav class="level">
                            <div class="level-item has-text-centered">
                                <a href="https://twitter.com/debpu06"><img src="~/assets/twitter-32px.png"></a>
                            </div>
                            <div class="level-item has-text-centered">
                                <a href="https://github.com/debpu06"><img src="~/assets/GitHub-Mark-32px.png"></a>
                            </div>
                            <div class="level-item has-text-centered">
                                <a href="https://linkedin.com/in/debpu06"><img src="~/assets/linkedin-32px.png"></a>
                            </div>
                            <div class="level-item has-text-centered">
                                <a href="mailto:debpu06@protonmail.com"><img src="~/assets/mail-32px.png"></a>
                            </div>
                        </nav>
                    </div>
                  </div>
                </div>
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
      return Promise.all([
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        })
      ]).then(([posts]) => {
        // return data that should be available
        // in the template
        var tags = []
        posts.items.forEach(post => {
          tags = tags.concat(post.fields.tags)
        });
        return {
          posts: posts.items,
          tags: tags
        }
      }).catch(console.error)
    },
    components: {
      vuemarkdown
    }
  }
</script>
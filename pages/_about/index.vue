<template>
  <section class="hero is-fullheight is-default is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-3">
                        <figure class="image is-2by3">
                            <img src="https://picsum.photos/800/600/?random" alt="Description">
                        </figure>
                        <aside class="menu">
                            <p class="menu-label">
                                Contact
                            </p>
                        </aside>
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
                    <div class="column is-7 is-offset-1">
                        <h1 class="title is-2"> name
                        </h1>
                        <h2 class="subtitle is-4"> subtitle
                        </h2>
                        <br>
                        <p> test
                        </p>                        
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
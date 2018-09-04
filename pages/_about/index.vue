<template>
  <section class="hero is-fullheight is-default is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-3">
                        <profilepanel></profilepanel>
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
  import profilepanel from '~/components/ProfilePanel'
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
      vuemarkdown,
      profilepanel
    }
  }
</script>
<template>
<div>
    <navbar></navbar>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-9">
                    <div class="card article">
                      <div class="card-content">
                        <div class="media">
                            <div class="media-content has-text-centered">
                                <p class="title article-title">About Me</p>
                                <p class="subtitle"></p>
                            </div>
                        </div>
                        <div class="content article-body" >
                            <vuemarkdown :source="person.fields.longBio"></vuemarkdown>
                        </div>
                    </div>
                </div>
                </div>
                <div class="column is-3">
                    <profilepanel :person="person"></profilepanel>
                </div>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import vuemarkdown from 'vue-markdown'
  import Navbar from '~/components/NavBar'
  import profilepanel from '~/components/ProfilePanel'
  const client = createClient()

  export default {
    asyncData ({env, payload}) {
        if (payload) return {
         person: payload
        };
      return Promise.all([
        client.getEntries({
          'content_type': 'person'
        })
      ]).then(([persons]) => {
        return {
          person: persons.items[0]
        }
      }).catch(console.error)
    },
    components: {
      vuemarkdown,
      Navbar,
      profilepanel
    }
  }
</script>
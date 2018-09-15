<template>
    <div>
        <navbar></navbar>
        <section class="section" role="main">
            <div class="container">
                <div class="columns">    
                    <div class="tile is-parent"> 

                        <div class="column is-9">
                            <div class="tile is-child box">
                                <div class="media">
                                    <div class="media-content has-text-centered">
                                        <p class="title article-title"> About Me</p>
                                        <div class="tags has-addons level-item">
                                            <span classs="tag is-link"></span>
                                        </div>
                                        <div class="media-content has-text-right">
                                        <!-- <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="content article-body">
                                    <vuemarkdown :source="person.fields.longBio"></vuemarkdown>
                                </div>
                            </div>
                        </div>
                        <div class="column is-3">
                            <profilepanel :person="person"></profilepanel>
                        </div>



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
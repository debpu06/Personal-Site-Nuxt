<template>
<div>
    <navbar></navbar>
    <section class="section">
        <div class="container" role="main">
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
                <div class="column is-2 is-hidden-mobile">
                    <aside class="menu">
                        <div class="box">
                            <ul class="menu-list">
                                <li>Topics</li>
                                <li>
                                    <a v-on:click="filterPosts('all')">
                                        <span class="tag">
                                        all
                                        </span>
                                    </a>
                                </li>
                                <li v-for="tag in tags" :key="tag">
                                    <a v-on:click="filterPosts(tag)">
                                        <span class="tag is-primary">
                                        {{tag}}
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <div class="column is-7">
                    <div class="is-link">
                    <div class="tile is-ancestor is-vertical">
                                <div v-for="post in posts" :key="post.sys.id" class="tile is-parent" :id=post.fields.tags>
                                    <nuxt-link v-bind:to="'blog/'+post.fields.slug+'/'" >
                                        <article class="tile is-child box">
                                            <p class="title">{{post.fields.title}}</p>
                                            <p class="subtitle">{{post.fields.description}}</p>
                                            <div class="tags">
                                            <span v-for="tag in post.fields.tags" :key="tag" class="tag is-primary">{{tag}}</span>
                                            </div>
                                        </article>
                                    </nuxt-link>
                                </div>
                    </div>
                    </div>
                </div>
                <div class="column is-3">
                    <profilepanel  :person="person"></profilepanel>
                </div>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import vuemarkdown from 'vue-markdown'
  import profilepanel from '~/components/ProfilePanel'
  import navbar from '~/components/NavBar'

  const client = createClient()

  export default {
    // `env` is available in the context object
    asyncData ({env}) {
      return Promise.all([
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        })
      ]).then(([persons,posts]) => {
        // return data that should be available
        // in the template
        var tags = []
        posts.items.forEach(post => {
            post.fields.tags.forEach(tag => {
                if (tags.indexOf(tag) < 0) {
                    tags = tags.concat(tag)
                }
            });
        });
        return {
          person: persons.items[0],
          posts: posts.items,
          tags: tags
        }
      }).catch(console.error)
    },
    methods: {
        filterPosts: function(selectedTag){
            var blogPosts = document.querySelectorAll('.tile.is-parent');
            [].forEach.call(blogPosts, function(blogPost) {
                blogPost.style.display='flex'
                if(blogPost.id.indexOf(selectedTag) < 0 && selectedTag !== 'all'){
                    blogPost.style.display='none'
                }
            });

            var menuTags = document.querySelectorAll('.menu-list > li > a > .tag');
            [].forEach.call(menuTags, function(menuTag) {
               menuTag.classList.add('is-primary')
               if(menuTag.innerHTML.indexOf(selectedTag) > -1){
                    menuTag.classList.remove('is-primary')
               }
            });
        }
    },
    components: {
      vuemarkdown,
      profilepanel,
      navbar
    }
  }
</script>
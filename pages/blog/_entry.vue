<template>
  <article class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <p class="subtitle is-6">
            <nuxt-link to="/">Back to home</nuxt-link>
          </p>

          <h1 class="title is-2">
            {{ blogPost.fields.title }}
          </h1>

          <!-- <hr />

          <div class="content" v-if="category.fields.message" v-html="$md.render(category.fields.message)"></div>

          <h2>{{mytest}}</h2>
          
          <h4 v-for="tes in test" v-bind:key="tes.key">
            <div>{{tes.fields.title}}</div>
          </h4> -->

          <!--repeating list-->

        </div>
      </div>
    </div>
  </article>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
data() {
    return {
      blogPost: []
    }
  },
  async asyncData({ params, error, payload }) {

    if (payload) return {
      blogPost: payload
    };

    console.log("QUERY CONTENTFUL")
    return client.getEntries({
        'fields.slug': params.entry,
        'content_type': 'blogPost'
    }).then(entries => {
        if (entries.total == 1) return {
            blogPost: entries.items[0]
        }
    })
  },
  components: {
    
  },
  head() {
    return {
      title: '',
    };
  },
};
</script>
<template>
  <article class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <p class="subtitle is-6">
            <nuxt-link to="/">Back to home</nuxt-link>
          </p>

          <!-- <h1 class="title is-2">
            {{ category.fields.title }}
          </h1>

          <hr />

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
import client from '~/plugins/contentful';
export default {
data() {
    return {
      mytest: '',
      test: []
    }
  },
  async asyncData({ params, error, payload }) {
  }
};
</script>
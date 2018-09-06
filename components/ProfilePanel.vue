<template>
    <div class="card">
        <div class="card-image">
        <figure class="image is-3by4">
            <img :src="person.fields.image.fields.file.url" alt="Placeholder image">
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
            <p class="title is-4">{{person.fields.name}}</p>
            <p class="subtitle is-6">@{{person.fields.twitter}}</p>
            </div>
        </div>

        <div class="content">
            <vuemarkdown>{{person.fields.shortBio}}</vuemarkdown> 
            <br><br>
            <nav class="level">
                <div class="level-item has-text-centered">
                    <a :href="'https://twitter.com/'+person.fields.twitter"><img src="~/assets/twitter-32px.png"></a>
                </div>
                <div class="level-item has-text-centered">
                    <a :href="'https://github.com/'+person.fields.github"><img src="~/assets/GitHub-Mark-32px.png"></a>
                </div>
                <div class="level-item has-text-centered">
                    <a :href="'https://linkedin.com/in/'+person.fields.linkedin"><img src="~/assets/linkedin-32px.png"></a>
                </div>
                <div class="level-item has-text-centered">
                    <a :href="'mailto:'+person.fields.email"><img src="~/assets/mail-32px.png"></a>
                </div>
            </nav>
        </div>
        </div>
    </div>
</template>

<script>
import vuemarkdown from 'vue-markdown'

export default {
    name: 'ProfilePanel',

    props: ['person'],

    components: {
      vuemarkdown
    }
}
    </script>
<template>
        <div class="tile is-child box is-hidden-tablet-only">
            <div class="card-image">
            <figure>
                <img :src="person.fields.image.fields.file.url" alt="Profile image" class="profileImage">
            </figure>
            </div>
            <div class="card-content">
            <div class="media">
                <div class="media-content has-text-centered">
                    <p class="title is-4">{{person.fields.name}}</p>
                    <div class="has-text-left">
                        <p class="subtitle is-6">@{{person.fields.twitter}}</p>
                    </div>
                </div>
            </div>

            <div class="content" style="margin:0.375em">
                <vuemarkdown>{{person.fields.shortBio}}</vuemarkdown> 
                <br><br>
                <nav class="level is-mobile">
                    <div class="level-item has-text-centered">
                        <a :href="'https://twitter.com/'+person.fields.twitter"><img src="~/assets/twitter-32px.png" alt="Twitter profile icon"></a>
                    </div>
                    <div class="level-item has-text-centered">
                        <a :href="'https://github.com/'+person.fields.github"><img src="~/assets/GitHub-Mark-32px.png" alt="Github profile icon"></a>
                    </div>
                    <div class="level-item has-text-centered">
                        <a :href="'https://linkedin.com/in/'+person.fields.linkedin"><img src="~/assets/linkedin-32px.png" alt="Linkedin profile icon"></a>
                    </div>
                    <div class="level-item has-text-centered">
                        <a :href="'mailto:'+person.fields.email"><img src="~/assets/mail-32px.png" alt="Email mail to icon"></a>
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
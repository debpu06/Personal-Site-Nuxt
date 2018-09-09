<!-- components/Navbar.vue -->

<template>
<section class="hero is-large header-image">
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">Home</a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/about/">About Me</nuxt-link>
          <!-- <nuxt-link class="navbar-item" to="/projects/">Projects</nuxt-link> -->
          <a class="navbar-item bd-is-rss is-small" href="/rss.xml"><span class="icon is-small"><i class="fa fa-rss"></i></span><span>Subscribe</span></a>
        </div>
      </div>
    </nav>
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        David Boland
      </h1>
      <h2 class="subtitle">
        Blog and Such
      </h2>
    </div>
  </div>
</section>
</template>

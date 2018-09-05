<!-- components/Navbar.vue -->

<template>
    <nav class="navbar is-link" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">Home</a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/about/">About Me</nuxt-link>
          <nuxt-link class="navbar-item" to="/projects/">Projects</nuxt-link>
          <a class="navbar-item bd-is-rss is-small" href="/rss.xml"><span class="icon is-small"><i class="fa fa-rss"></i></span><span>Subscribe</span></a>
        </div>
      </div>
    </nav>
</template>
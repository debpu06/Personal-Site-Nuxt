<!-- components/Navbar.vue -->

<template>
  <div class="container is-dark">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">Home</a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/about">About Me</nuxt-link>
          <nuxt-link class="navbar-item" to="/projects">Projects</nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>
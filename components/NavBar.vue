<!-- components/Navbar.vue -->

<template>
    <nav class="navbar is-link" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">Home</a>
        <a class="navbar-item is-hidden-desktop is-hidden-widescreen is-hidden-fullhd" href="/about/">About Me</a>
        <a class="navbar-item bd-is-rss is-small is-hidden-desktop is-hidden-widescreen is-hidden-fullhd" href="/rss.xml">
            <span class="icon is-small">
              <i class="fa fa-rss"></i>
            </span>
            <span>Subscribe</span>
          </a>
      </div>
      <div class="navbar-menu" id="navbarMenu">
        <div class="navbar-end">
          <a class="navbar-item" href="/about/">About Me</a>
          <a class="navbar-item bd-is-rss is-small" href="/rss.xml">
            <span class="icon is-small">
              <i class="fa fa-rss"></i>
            </span>
            <span>Subscribe</span>
          </a>
        </div>
      </div>
    </nav>
</template>

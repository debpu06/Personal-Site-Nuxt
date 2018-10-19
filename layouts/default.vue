<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
  //import Navbar from '~/components/NavBar'

  // export default {
  //   components: {
      
  //   }
  // }
</script>
 

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 1.25em;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #f7f7f7;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.header-image {
    /* background-image: url("~/assets/heroTest3_edited.jpg"); */
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #000;
}

.embeddedImage {
  float: left;
  margin-right: 18px;
  margin-bottom: 14px;
  margin-top: 14px
}

.imgContainer {
  float: left; 
  overflow: hidden; 
  width: 33%;
}

.paddedImage {
  margin-right: 18px;
  margin-bottom: 14px;
  margin-top: 14px;
  position: relative;
  height: 0;
  padding-bottom: 133%;
  overflow: hidden;
}

.paddedImage img {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  left: 0%;
}

.vid-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 ratio */
    height: 0;
    overflow: hidden;
}

.vid-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}


.profileImage{
  border-radius: 50%;
  height: 160px;
  width: 160px;
  display: block;
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.blogHeading{
  color: rgba(255,255,255,0);
  text-shadow: 0px 1px 0px rgba(255,255,255,.25), 0px -1px 0px rgba(0,0,0,.5);
}
</style>


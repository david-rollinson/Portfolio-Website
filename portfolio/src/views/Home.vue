<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
//import HomeItems from "./components/HomeItems.vue";

import HomeItems from '../components/HomeItems.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
         <!-- 'style:' tag to account for paragraph indent -->
        <RouterLink to="/">David<span style="nav a">Rollinson</span></RouterLink>
        <RouterLink to="/">About</RouterLink>
        <RouterLink to="/">Work</RouterLink>
        <RouterLink to="/">CV</RouterLink>
      </nav>
    </div>
  </header>
  <!-- only enable this when you can hide one set of info whilst showing another -->
  <!-- <RouterView /> -->

  <body>
    <div class="intro_text">
    <h3>
      <span style ="font-weight: 800;" >David Rollinson</span> is a creative technologist who vitalises spaces and materials with interactive technologies. At the centre of their work in experiential environment design and development are computational systems used to investigate phenomenology and social valuation. Their creative skills readily to hand include experience design, 2D/3D graphical programming, CGI design and animation, custom electronics and creative ML. They recently combined these into a hypermedia installation exhibited at Bargehouse Gallery, Southbank. <p><span style ="font-weight: 800;" >Currently</span> they are a resident creative technologist at The Beams, Centre for New Culture where they also assisted in the development of 'Cyclops Retina, Light Barrier 2.4' by Kimchi and Chips with Rosa Menkman.</p></h3>
  </div>
  </body>
</template>

<!-- <script>
  export default {
    name: 'Counter', 
    data() {
      return {
        count: 3,
      }
    },
    methods: {
      increment() {
        this.count += 0.1;
      }
    }
  } 
</script> -->

<style scoped>
header {
  letter-spacing: 3;
  line-height: 1.5;
  height: fit-content;
  text-align: left;
  font-family: 'Assistant.ttf';
  width: 300px;
  padding: 24px;
}

h3 {
  color: blue;
  font-family: Assistant;
  font-size: 20px;
  font-weight: 100;
}
.intro_text {
  margin-left: auto;
  margin-right: auto;
  max-width: 60vw;
}

body {
  line-height: 1.5;
  max-height: 50vh;
  text-align: left;
  font-family: 'Assistant.ttf';
}

/*apply to all nav children*/
nav > * {
  /*text*/
  font-size: 24px;
  letter-spacing: 2ch;
  font-family: Codystar;
  font-weight: 800;
  text-align: left;
  text-decoration: none;
  height: fit-content;
}

nav a {
  /*text*/
  font-size: 24px;
  letter-spacing: 2ch;
  font-family: Codystar;
  font-weight:800;
  text-align: left;
  text-decoration: none;

  /*border*/
  border: none;
  border-radius:0%;
  border-color: transparent;

  /*positioning*/
  position: relative;
  text-indent: 1.5ch;
  padding-left: 0%;
  margin-left: 0;
  min-width: fit-content;

  /*display mode*/
  display: flex;
  flex-wrap: wrap;

  /*pointer events*/
  cursor: cell;
  pointer-events: all;
  color: blue;
  background: transparent;
  
  /* sets position in front / behind  */
  z-index: 1;
  /* setup transition*/
  transition: 0.8s;
  /*set filter*/
  filter: blur(3px);
  /* filter: drop-shadow(0 0 0); */

  /*animation setup*/
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-name: floater;
  animation-duration: 7s;
}

nav a:hover, nav a:active {
  background: yellow;
  border-radius:50%;
  padding-left: 5%;
  min-width: fit-content;
  filter: blur(0px);
  filter: drop-shadow(0.2rem 0.2rem 1rem yellow);
}

/*set animation params*/
@keyframes floater {
  from { transform: translate(0,  0px); }
  35%  { transform: translate(2px, 7px); }
  65%  { transform: translate(-2px, 15px); }
  to   { transform: translate(0, -0px); }
}

/*Below is for when transferring styles between active classes, i.e. when the router link matches the current page.*/ 
/* nav a.router-link-exact-active {

}

nav a.router-link-exact-active:hover {

} */

/*set  media rule*/
@media (max-width: 1024px) { /* sets the min width of these particular style attributes */
  header {
    display: flex;
    place-items: left;
    justify-content: flex-start;
    max-width: 100vw;
    height: fit-content;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  body {
    text-align: left;
  }

  header.wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .intro_text {
    margin-left: auto;
    margin-right: auto;
    max-width: 75vw;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    /* padding: 1rem 0; */
    /* margin-top: 1rem; */
  }

}
</style>

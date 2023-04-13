<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
//import HomeItems from "./components/HomeItems.vue";

import HomeItems from '../components/HomeItems.vue';
</script>

<template>
  <header>
    <div>
      <!-- style: tag to account for paragraph indent -->
      <button class="header_button">David<br /><span style="button.header_button">Rollinson</span></button>
    </div>
    <div>
      <button class="header_button">About</button>
    </div>
    <div>
      <button class="header_button">Work</button>
    </div>
    <div>
      <button class="header_button">CV</button>
    </div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">David Rollinson</RouterLink>
        <RouterLink to="/">About</RouterLink>
        <RouterLink to="/">CV</RouterLink>
      </nav>
    </div>
  </header>
  <!-- only enable this when you can hide one set of info whilst showing another -->
  <!-- <RouterView /> -->

  <body>
    <div class="intro_text">
    <h3>
      David Rollinson is a creative technologist who vitalises spaces and materials with interactive technologies. At the centre of their work in experiential environment design and development are computational systems used to investigate phenomenology and social valuation. Their creative skills readily to hand include experience design, 2D/3D graphical programming, CGI design and animation, custom electronics and creative ML. They recently combined these into a hypermedia installation exhibited at Bargehouse Gallery, Southbank.    </h3>
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
  max-height: 100vh;
  text-align: left;
  font-family: 'Assistant.ttf';
  width: 10%;
}

h3 {
  color: blue;
  font-family: Assistant;
  font-size: 20px;
}
.intro_text {
  margin-left: auto;
  margin-right: auto;
  max-width: 60vw;
}

button.header_button {
  /*text*/
  font-size: 24px;
  letter-spacing: 2ch;
  font-family: Codystar;
  font-weight:800;
  text-align: left;
  text-decoration: none;

  filter: blur(3px);

  /*border*/
  border: none;
  border-radius:0%;
  border-color: transparent;

  /*positioning*/
  position: relative;
  text-indent: 1.5ch;
  height: fit-content;
  padding-left: 0%;
  margin-left: 0;
  max-width: fit-content;

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
  transition: all 0.5s;
  }
  button.header_button:hover{
  background: yellow;
  border-radius:50%;
  transition: 1s;
  padding-left: 5%;
  max-width: fit-content;
  filter: blur(0px);
}
button.header_button:not(:hover){
  background: transparent;
}


nav {
  font-size: 24px;
  font-family: Codystar;
  border: none;
  font-weight:800;
  text-align: left;
  pointer-events: all;
  color: blue;
  background: transparent;
  position: relative;
  cursor: cell;
  border-radius:50%;
  border-color: transparent;
  text-indent: 1ch;
  width: 15ch;
  height: 2ch;
  /* sets position in front / behind  */
  z-index: 1;
  padding-left: 5%;
  margin-left: 0;
}


body {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
  font-family: 'Assistant.ttf';
}

nav { /*Style the Home Nav Buttons*/
  width: 100%;
  font-size: 24px;
  text-align: center;
  margin-top: 2rem;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  text-decoration: none;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) { /* sets the min width of these particular style attributes */
  header {
    /* display: flex; */
    /* place-items: center; */
    /* justify-content: flex-start; */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header.wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

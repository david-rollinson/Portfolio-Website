<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
//import HomeItems from "./components/HomeItems.vue";

</script>

<template>
  <header>
    <div>
      <button class="header_button" style="letter-spacing: 3.1ch;">David</button>
    </div>
    <div>
      <button class="header_button" style="letter-spacing: 1.1ch;">Rollinson</button>
    </div>
    <div>
      <button class="header_button" style="letter-spacing: 3.1ch;">About</button>
    </div>
    <div>
      <button class="header_button" style="letter-spacing: 4.3ch;">Work</button>
    </div>
    <div>
      <button class="header_button" style="letter-spacing: 9ch;">CV</button>
    </div>
    <div class="wrapper">
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink> -->
      </nav>
    </div>
  </header>
  <!-- only enable this when you can hide one set of info whilst showing another -->
  <!-- <RouterView /> -->

  <body>
    <h3>
      My name is David Rollinson (@devushkabeam) and I am a creative technologist and recent Computational Arts graduate from Goldsmiths College. My work is about the material affect of the immaterial. I contextualise the post-internet anxiety of proliferation through generating multimodal artworks operating as sites of slowness and attunement.
    </h3>
  </body>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: left;
  font-family: 'Assistant.ttf';
  width: 10%;
}

h3 {
  color: blue;
  font-family: Assistant;
  font-weight: 100;
  font-size: 20px;
}

header .header_button {
  font-size: 24px;
  font-family: Codystar;
  font-weight:800;
  text-align: right;
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

header .header_button:hover{
  background: yellow;
}

body {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
  font-family: 'Assistant.ttf';
}

nav { /*Style the Home Nav Buttons*/
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

/* nav a.router-link-exact-active {
  color: var(--color-text);
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
} */

@media (min-width: 1024px) { /* sets the min width of these particular style attributes */
  header {
    /* display: flex; */
    /* place-items: center; */
    /* justify-content: flex-start; */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
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

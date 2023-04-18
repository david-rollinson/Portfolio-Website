<!-- SPA: here we're only changing views -->

<script setup>
import { ref, computed } from 'vue'

const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <header>
    <div class="wrapper">
      <nav onclick>
         <!-- 'style:' tag to account for paragraph indent -->
        <RouterLink to="/">David<span style="nav a">Rollinson</span></RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/work">Work</RouterLink>
        <RouterLink to="/cv">CV</RouterLink>
      </nav>
    </div>
  </header>
    <!-- Always renders the contents of the active page. -->
    <RouterView></RouterView>
</template>
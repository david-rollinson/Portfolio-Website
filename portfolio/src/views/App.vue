<!-- SPA: here we're only changing views -->
<template>
  <header>
    <div class="wrapper">
      <TheNavigation/>
    </div>
  </header>
    <!-- Always renders the contents of the active page. -->
    <!---alter the key to rerender the component inside routerview--->
    <RouterView :key="$route.path"></RouterView>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'

export default{
  components: {TheNavigation}
}
</script>

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

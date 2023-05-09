<!-- SPA: here we're only changing views -->
<template>
  <header>
    <div class="wrapper">
      <TheNavigation/>
    </div>
  </header>
    <!-- Always renders the contents of the active page. -->
    <!---alter the key to rerender the component inside routerview--->
    <!-- only if view is '/work', pass in the image loaded and imageUrl -->
    <!-- <RouterView :key="$route.path" v-bind="$route.path=='/work' ? {isImageLoaded, imageUrl} : {}"></RouterView> -->
    <RouterView :key="$route.path" v-bind="$route.path=='/work' ? {newImages} : {}"></RouterView>
    <!-- <RouterView :key="$route.path"></RouterView> -->
</template>


<script>
import TheNavigation from '@/components/TheNavigation.vue'
import sourceData from '@/data_copy.json'

export default {
  components: {
    TheNavigation
  },
  data() {
    return {
      projects: sourceData.projects,
      newImages: []
    }
  }, 
  methods: {
    populateArray(){
      //do this on load to effectively preload portfolio images.
    const info = this.projects;
      for (const project in info) {
        const img = new Image();
        img.src = `/images/` + info[project].image;
        this.newImages.push(`/images/` + info[project].image);
        img.onload = () => {
          // console.log(this.newImages);
        }
      }
    }
  },
  mounted() {
    // const img = new Image()
    // img.src = this.imageUrl
    // img.onload = () => {
    //   this.isImageLoaded = true
    // }
    //preload all images
    this.populateArray();
    // console.log(this.newImages);
  }
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

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
    <RouterView :key="$route.path"></RouterView>
    <!-- <RouterView :key="$route.path" :imageUrl="imageUrl" :isImageLoaded="isImageLoaded"></RouterView> -->
</template>


<script>
import TheNavigation from '@/components/TheNavigation.vue'
import sourceData from '@/data.json'

export default{
  components: {TheNavigation},
  data() {
    return {
      projects: sourceData.projects,
      newImages: [],
      imageUrl: "https://file.notion.so/f/s/ba665e87-3593-469b-8dd6-baf3e4fa32e0/Circular.gif?id=188d402c-e657-491a-92c9-5dc50dc7e80c&table=block&spaceId=b98cd729-48f8-4c4a-a2df-92bf3e006b5b&expirationTimestamp=1683223049312&signature=lqDRAN23i5dkn9IqB9TFFbwJrH-vuBEAmRWdYXeKGFc",
      isImageLoaded: false
    }
  }, 
  methods: {
    populateArray(){
    //   this.projects.array.forEach(this.project.image => {
    //  const img = new Image,
    //  img.src = this.project.image,
    //  newImages.push(img)
    }
  },
  mounted() {
    const img = new Image()
    img.src = this.imageUrl
    img.onload = () => {
      this.isImageLoaded = true
    }
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

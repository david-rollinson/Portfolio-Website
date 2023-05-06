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
import sourceData from '@/data.json'

export default{
  components: {
    TheNavigation
  },
  data() {
    return {
      projects: sourceData.projects,
      newImages: [],
      imageUrl: "https://droll002.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F95d5490b-971b-4f54-9dbb-7d6b041d97a8%2F4.jpg?table=block&id=5ad76f8f-b7e4-4306-8317-b68e79c3e6a7&spaceId=b98cd729-48f8-4c4a-a2df-92bf3e006b5b&width=2000&userId=&cache=v2",
      isImageLoaded: false,
    }
  }, 
  methods: {
    populateArray(){
    const info = this.projects;
      for (const project in info) {
        const img = new Image();
        img.src = info[project].image;
        this.newImages.push(info[project].image);
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

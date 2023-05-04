<script>
  import { ref, onUnmounted, onMounted } from "vue";
  import sourceData from '@/data_copy.json'
  export default {
    data() {
      return {
        projects: sourceData.projects,
        xWidth: 0,
        yHeight: 0,
        xPos: 0,
        yPos: 0,
        offsetX: 50,
        offsetY: 50
      }
    }, 
    methods: {
      mouseEnter(event){
        const img = event.target;
        this.xWidth = img.clientWidth;
        this.yHeight = img.clientHeight;
      }, 
      mouseMove(event) {
        this.xPos = event.offsetX;
        this.yPos = event.offsetY;
        this.offsetX = 100 - ((this.xWidth - this.xPos)/this.xWidth)*100;
        this.offsetY = 100 - ((this.yHeight - this.yPos)/this.yHeight)*100;
      },
      mouseLeave(event) {
        this.xPos = 0;
        this.yPos = 0;
        this.offsetX = 50;
        this.offsetY = 50;
      }
    },
    props: {
      imageUrl: {
        type: String,
        required: true
      },
      isImageLoaded: {
        type: Boolean,
        required: true
      }
    }
}

</script>

<template>
  <header>
    <img v-if="isImageLoaded" :src="imageUrl" />
  </header>

  <body>
    <div class="grid_container">
    <div class="projects">
        <RouterLink class="grid_item" style="cursor:cell" v-for="project in projects"
        :key="project.id" 
        :to="{name: 'project.show', params:{slug: project.slug, id: project.id}}"
        @mouseenter="mouseEnter" 
        @mousemove="mouseMove" 
        @mouseleave="mouseLeave"
        > <!--go to the project.show route as set in index.js-->
        <!-- <h2>{{ project.name }}</h2> -->
        <div class="image_border">
        <div class="image_container">
        <img :src="`/images/${project.image}`" class="content_img" rel="preload"/> 
        <!-- select from an array of props? -->
        </div>
        </div>
        <!-- template including image file, and brief description preview? -->
        <h3 class="name">{{ project.name }}</h3>

      </RouterLink> <!--set unique identifier key for each project passed over - enabling vue to keep track of variables-->
  </div>
</div>
  </body>
</template>

<style scoped>

body {
  --image-width: 30vw;
  --image-height: calc(var(--image-width)*(2/3));
  --grid-height: calc(var(--image-height) + 2vw);
}
.grid_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.projects{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  row-gap: 25px;
  justify-items: center;
  margin-bottom: 200px;
}

.grid_item {
  height: var(--grid-height);
  transition: 2s;
  text-decoration: none;
}

.image_border {
  filter: none;
  transition: 2s;
}

.image_border:hover {
  filter: drop-shadow(0 0rem 1rem blue);
  transition: 2s;
}

.image_container {
  filter: saturate(70%);
  overflow: hidden;
  transition: 1s;
  height: var(--image-height);
}

.image_container:hover {
  filter: saturate(100%);
  transition: 2s;
}

.content_img {
  width: var(--image-width);
  transform: scale(1);
  transition: 1s;
}

.content_img:hover {
  transform: scale(1.4);
  transform-origin: v-bind(offsetX + "% ") v-bind(offsetY + "% ");
  transition: transform 1s;
}

.name {
  margin-top: 5px;
  opacity: 0;
  transition: 0.8s;
  font-size: medium;
}

.grid_item:hover .name {
  opacity: 1;
  transition: 1s;
}

@media (max-width: 900px) {
  body {
  --m-image-width: calc((30vw*2.33));
  --m-image-height: calc(var(--m-image-width)*0.66);
  --m-grid-height: calc((var(--m-image-height) + 2vw));
  }

.grid_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.projects{
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 60px;
  justify-items: center;
  margin-bottom: 200px;
  align-items: end;
}

.image_container {
  height: var(--m-image-height);
}
.grid_item {
  filter: saturate(100%);
  height: var(--m-grid-height);
}
.content_img {
  width: var(--m-image-width);
}

.image_border {
  filter: drop-shadow(0 0rem 0.6rem blue);
}

.name {
  margin-top: 10px;
  opacity: 1;
}

.content_img:hover {
  transform: scale(1);
}

}
</style>
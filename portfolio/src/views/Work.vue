<script>
  import { ref, onUnmounted, onMounted } from "vue";
  import sourceData from '@/data.json'
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
    }
}

</script>

<template>
  <header>
  </header>

  <body>
    <div class="container">
    <div class="projects">
        <RouterLink class="grid_item" style="cursor:cell" v-for="project in projects"
        :key="project.id" 
        :to="{name: 'project.show', params:{slug: project.slug, id: project.id}}"
        @mouseenter="mouseEnter" 
        @mousemove="mouseMove" 
        @mouseleave="mouseLeave"
        > <!--go to the project.show route as set in index.js-->
        <!-- <h2>{{ project.name }}</h2> -->
        <img :src="project.image" class="content_img" ref="content_ref"/>
        <!-- template including image file, and brief description preview? -->
        <!-- <h1>{{ project.description }}</h1> -->

      </RouterLink> <!--set unique identifier key for each project passed over - enabling vue to keep track of variables-->
  </div>
</div>
  </body>
</template>

<style scoped>
.container {
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

.grid_item:hover {
  filter: drop-shadow(0 0rem 1rem blue);
  filter: saturate(100%);
  transition: 2s;
}

.grid_item {
  filter: saturate(70%);
  overflow: hidden;
  transition: 1s;
  height: 18vw;
}

.content_img {
  width: 30vw;
  transform: scale(1);
  transition: 1s;
}

.content_img:hover {
  transform: scale(1.2);
  transform-origin: v-bind(offsetX + "% ") v-bind(offsetY + "% ");
  transition: transform 1s;
}

@media (max-width: 900px) {
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.projects{
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  row-gap: 25px;
  justify-items: center;
  margin-bottom: 200px;
  align-items: end;
}
.grid_item {
  filter: saturate(100%);
  height: 40vw;
}
.content_img {
  width: 70vw;
}

.content_img:hover {
  transform: scale(1);
}

}
</style>
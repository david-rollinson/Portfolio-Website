<script>
  import sourceData from '@/data.json'
  export default {
    data() {
      return {
        projects: sourceData.projects
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
        > <!--go to the project.show route as set in index.js-->
        <!-- <h2>{{ project.name }}</h2> -->
        <img :src="project.image" style="max-width: 20vw; height: auto;"/>
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

.grid_item{

}

</style>
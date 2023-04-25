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
      <h3>Coming soon...</h3>
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
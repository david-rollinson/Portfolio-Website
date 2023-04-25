<template>
    <section class="project">
    <div>
        <h3>{{ project.name }}</h3>
        <div class = "details">
            <h3>{{ project.description }}</h3>
        </div>
    </div>
</section>
</template>

<script>
import sourceData from '@/data.json'
export default {
    props: {
        id: {type: Number, required:true}
    },
    computed:{
        //iterate over ids to find one that matches the current id. 
        project() {
            return sourceData.projects.find(project => project.id === this.id)
        }
    }
}
</script>
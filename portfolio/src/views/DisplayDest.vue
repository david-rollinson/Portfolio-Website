<template>
    <section class="project">
    <div>
        <!-- <h3>{{ project.name }}</h3> -->
        <div class = "details">
            <!-- <h3>{{ project.description }}</h3> -->
        </div>
    </div>
    <div class="intro_text">
    <h3>
        <span style="font-weight: 600;">Back-end </span>still in development. More details coming soon...
    </h3>
    </div>
</section>
</template>

<script>
import sourceData from '@/data.json'
import axios from 'axios';

export default {
    props: {
        id: {type: Number, required:true}
    },
    computed:{
        //iterate over ids to find one that matches the current id. 
        project() {
            return sourceData.projects.find(project => project.id === this.id)
        }
    },
    mounted() {
        axios.get('http://localhost:1337/api/articles').then(response => {
        console.log(response);
        });
    }
}
</script>
<template>
    <section class="project">
    <div>
        <div class = "details">
            <!-- <h3>{{ project.description }}</h3> -->
        </div>
    </div>
    <div class="intro_text">
    <h2>{{ project.name }}</h2>
    <div v-html="dataToParse" class="markdown_wrapper"></div>
    </div>
</section>
</template>

<script>
import sourceData from '@/data.json'
import axios from 'axios';
 import { marked } from 'marked';

export default {
    props: {
        id: {type: Number, required:true}
    },
    data () {
        return {
            dataToParse: "Loading..." //initialise as empty, load in later. 
        }
    },
    mounted() {
        /*Strapi example*/
        // axios.get('http://localhost:1337/api/articles/1').then(response => {
        // console.log(response);
        // });
        this.markdownToHtml(this.id); //load in markdown and save to data variable. 
    },
    computed:{
        //iterate over ids to find one that matches the current id. 
        project() {
            return sourceData.projects.find(project => project.id === this.id)
        }
    },
    methods: {
        async markdownToHtml(_id){
        if(sourceData.projects[_id-1].template != "") { //check if there is data to load. 
            let newContent = await fetch(sourceData.projects[_id-1].template).then( response => response.text() ).then(r => marked.parse(r));
            // console.log(newContent); //check if promise fulfilled. 
            this.dataToParse = newContent;
        }
        }
    }
}
</script>

<style>

.markdown_wrapper {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 200px;
  max-width: 60vw;
  overflow: hidden;
  font-weight: 100;
}

.mkd_img {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 15px
}

.mkd_img img {
    width: 600px;
}

</style>
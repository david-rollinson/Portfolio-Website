<template>
    <section class="project">
    <div class = "details">
            <!-- <h3>{{ project.description }}</h3> -->
    </div>
    <div class="intro_text">
    <h2>{{ project.name }}</h2>
    <div v-html="dataToParse" class="markdown_wrapper"></div>
    </div>
    <div class="back-home">
        <RouterLink to="/work">←back</RouterLink>
    </div>
</section>
</template>

<script>
import sourceData from '@/data.json'
import axios from 'axios';
 import { marked } from 'marked';
 import DOMPurify from 'dompurify'

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
            let newContent = await fetch(sourceData.projects[_id-1].template).then( response => response.text() ).then(r => marked.parse(r)).then(r => DOMPurify.sanitize(r));
            // console.log(newContent); //check if promise fulfilled. 
            this.dataToParse = newContent;
        }
        }
    }
}
</script>

<style>

body {
    --margin-val: 35px;
}

a {
    text-decoration: wavy overline yellow;
    color: rgb(92, 92, 212);
}

.center_text {
    text-align: center;
}

.markdown_wrapper {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 200px;
  max-width: 60vw;
  overflow: hidden;
  font-weight: 100;
}

.back-home {
    text-align: center;
}

.mkd_img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 15px;
}

.mkd_img img {
    display: block;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}

.mkd_img:nth-of-type(1) { flex-grow: 1; }
.mkd_img:nth-of-type(2) { flex-grow: 0.1; }
.mkd_img:nth-of-type(3) { flex-grow: 0.1; }
.mkd_img:nth-of-type(4) { flex-grow: 1; }

.video_container {
    display: flex;
    flex-wrap: wrap;
    margin-top: var(--margin-val);
    margin-bottom: var(--margin-val);
    font-weight: 100;
    font-size: 15px;
    justify-content: center;
}

.video_container .video_flexbox {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}

.v_video {
    width: fit-content;
    height: 300px;
    min-height: 200px;
    max-height: 500px;
}

.h_video {
    width: 100%;
    min-height: 200px;
    height: 500px;
    max-height: 500px;
}

/*set media rule*/
@media (max-width: 900px) {

.markdown_wrapper {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 200px;
    max-width: 100vw;
    overflow: hidden;
    font-weight: 100;
}

.mkd_img {
    font-size: 12px;
}

.mkd_img img {
    width: 90%;
}

.video_container {
    display: flex;
    flex-wrap: wrap;
}

.video_flexbox {
    flex-direction: column;
    align-items: start;
    justify-content: center;
}

}

</style>
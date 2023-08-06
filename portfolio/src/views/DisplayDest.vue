<template>
  <div>
    <section class="project">
      <div class="details">
        <!-- <h3>{{ project.description }}</h3> -->
      </div>
      <div class="intro_text">
        <h2>{{ project.name }}</h2>
        <div v-html="dataToParse" class="markdown_wrapper"></div>
      </div>
      <div class="back-home">
        <a @click="nextId" v-if="withinProjectArray">Next →</a>
        <RouterLink to="/work" v-if="!withinProjectArray">←Work</RouterLink>
      </div>
    </section>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import axios from "axios";
import { marked } from "marked";
import DOMPurify from "dompurify";

export default {
  props: {
    id: { type: Number, required: true },
  },
  data() {
    return {
      dataToParse: "Loading...", //initialise as empty, load in later.
      withinProjectArray: true,
    };
  },
  mounted() {
    /*Strapi example*/
    // axios.get('http://localhost:1337/api/articles/1').then(response => {
    // console.log(response);
    // });
    this.markdownToHtml(this.id); //load in markdown and save to data variable.
    this.checkId();
  },
  computed: {
    //iterate over ids to find one that matches the current id.
    project() {
      var tmpId = sourceData.projects.find((project) => project.id === this.id);
      return tmpId;
    },
  },
  methods: {
    async markdownToHtml(_id) {
      if (sourceData.projects[_id - 1].template != "") {
        //check if there is data to load.
        let newContent = await fetch(sourceData.projects[_id - 1].template)
          .then((response) => response.text())
          .then((r) => marked.parse(r));
        // console.log(sourceData.projects[_id-1].template); //check article selection.
        // console.log(newContent); //check if promise fulfilled.
        // this.dataToParse = DOMPurify.sanitize(newContent); //TO DO: find out how to sanitise content without removing iframe content?
        this.dataToParse = newContent;
      }
    },
    nextId() {
      var nextId = sourceData.projects.find((project) => project.id === this.id+1); //get the next id in the series
      if(nextId) {
        this.$router.push({ path:`/work/${nextId.id}/${nextId.slug}`});
      } else {
        this.$router.push({ path:`/info`});
      }
    },
    checkId() {
      var chckId = sourceData.projects.find((project) => project.id === this.id);
      if(chckId.id < sourceData.projects.length) {
        this.withinProjectArray = true;
      } else {
        this.withinProjectArray = false;
      }
    }
  },
};
</script>

<style>
body {
  --margin-val: 16px;
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
  margin-top: var(--margin-val);
  margin-bottom: var(--margin-val);
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

/* img {
  border: 10px solid white;
  border-radius: 10px;
  filter: drop-shadow(0px 2px 5px grey);
}

iframe video {
  border: 10px solid white;
  border-radius: 10px;
  filter: drop-shadow(0px 2px 5px grey);
} */

.mkd_img:nth-of-type(1) {
  flex-grow: 1;
}
.mkd_img:nth-of-type(2) {
  flex-grow: 0.1;
}
.mkd_img:nth-of-type(3) {
  flex-grow: 0.1;
}
.mkd_img:nth-of-type(4) {
  flex-grow: 1;
}

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
  min-height: 400px;
  margin-left: 0px;
  margin-right: 0px;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 4px;
  flex-basis: 100%;
}

.column {
  display: flex;
  flex: 40%;
  max-width: 35%;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}

.column img {
  margin-top: 8px;
  margin-bottom: 8px;
  vertical-align: middle;
}

.center_text {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
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

<template>
  <div>
    <section class="project">
      <div class="article_container">
        <div class="article_content">

            <h2>{{ project.name }}</h2>
            <div v-if="dataToParse === ''" class="await_data"><br>Loading</div>
            <div v-else>
              <div v-html="dataToParse" class="markdown_wrapper"></div>
            </div>

        </div>
        <div class="back-home">

            <a @click="nextId" v-if="withinProjectArray">Next →</a>
            <RouterLink to="/work" v-if="!withinProjectArray">←Work</RouterLink>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import { marked } from "marked";
import DOMPurify from "dompurify";

export default {
  props: {
    id: { type: Number, required: true },
  },
  data() {
    return {
      dataToParse: "", //initialise as empty, load in later.
      withinProjectArray: true,
    };
  },
  mounted() {
    window.scrollTo({ top: 0, left: 0 });
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
      if (sourceData.projects[_id - 1].template != "") { // check if there is data to load.
        let newContent = await fetch(sourceData.projects[_id - 1].template)
          .then((response) => response.text())
          .then((r) => marked.parse(r));
        // this.dataToParse = DOMPurify.sanitize(newContent); //TO DO: Remove usage of iFrame. Sanitising content removes vulnerable iFrame elements. 
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

b {
  font-family: Codystar;
  font-weight: 600;
  text-shadow: 1px 1px 5px rgba(0,0,255, 0.8);
}

.center_text {
  text-align: center;
}

.markdown_wrapper {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  max-width: 60vw;
  overflow: hidden;
  font-weight: 100;
  animation-name: fadeIn;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;
}

.await_data {
  max-width: 60vw;
  font-weight: 100;
}

.await_data:after {
  content: '';
  animation: loadingDots 1.5s infinite;
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

.row-media-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.row-video {
  height: 300px;
  width: 33%; 
  max-width: 33%; 
}

.row-video iframe {
  width: 100%;
  height: 100%;
  border: none;
}

 .column-media-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.column-video {
  width: 70%; /* Set the width of the video container */
  max-width: 70%;
  position: relative;
  margin-bottom: 20px; /* Ensure space below the video */
}

.column-caption {
  width: 100%;
  font-size: 15px;
  text-align: center; /* Center text */
}

.column-video iframe {
  width: 100%; /* Make iframe fill the container */
  height: auto; /* Let the height adjust automatically */
  aspect-ratio: 16/9; /* Directly enforce a 16:9 aspect ratio */
  border: none;
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

@keyframes loadingDots {
  0%, 100% {
    content: '';
  }
  25% {
    content: '. ';
  }
  50% {
    content: '. . ';
  }
  75% {
    content: '. . . ';
  }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/*set media rule*/
@media (max-width: 900px) {
  .markdown_wrapper {
    margin-left: auto;
    margin-right: auto;
    max-width: 100vw;
    overflow: hidden;
    font-weight: 100;
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

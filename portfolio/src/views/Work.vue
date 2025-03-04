<template>
  <div>
    <body>
      <div class="grid_container">
        <div class="projects">

          <RouterLink
            class="grid_item"
            v-for="project in projects"
            :key="project.id"
            :to="{
              name: 'project.show',
              params: { slug: project.slug, id: project.id },
            }"
            @mouseenter="mouseEnter"
            @mousemove="mouseMove"
            @mouseleave="mouseLeave"
          >

            <div class="image_border">
              <div class="image_container">
                <!--access the newImages array, use project id -1 to account for 0 based counting-->
                <img
                  :src="newImages[project.id - 1]"
                  class="content_img"
                  rel="preload"
                />
              </div>
            </div>
            <h3 class="name">{{ project.name }}</h3>
          </RouterLink>

        </div>
      </div>
    </body>
  </div>
</template>

<script>
import { ref, onUnmounted, onMounted } from "vue";
import sourceData from "@/data.json";
export default {
  data() {
    return {
      projects: sourceData.projects,
      xWidth: 0,
      yHeight: 0,
      xPos: 0,
      yPos: 0,
      offsetX: 50,
      offsetY: 50,
      deltaCount: 0,
    };
  },
  mounted() {
    if(window.innerWidth > 900){
      window.scrollTo({ top: 0, left: 0 });
    }
  },
  unmounted() {

  },
  methods: {
    mouseEnter(event) {
      const img = event.target;
      this.xWidth = img.clientWidth;
      this.yHeight = img.clientHeight;
    },
    mouseMove(event) {
      this.xPos = event.offsetX;
      this.yPos = event.offsetY;
      this.offsetX = 100 - ((this.xWidth - this.xPos) / this.xWidth) * 100;
      this.offsetY = 100 - ((this.yHeight - this.yPos) / this.yHeight) * 100;
    },
    mouseLeave(event) {
      this.xPos = 0;
      this.yPos = 0;
      this.offsetX = 50;
      this.offsetY = 50;
    },
    handleScroll (event) {
      //If deltaY (part of the WheelEvent object) is more than 0 i.e. a scroll up, push to next router page.
      this.deltaCount += event.deltaY;
      if(this.deltaCount < -100) {
        this.$router.push({ name: 'Home' })
      }
    },
  },
  props: {
    newImages: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
body {
  --image-width: 30vw;
  --image-height: calc(var(--image-width) * (2 / 3));
  --grid-height: calc(var(--image-height) + 2vw);
}
.grid_container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
}

.grid_item {
  height: var(--grid-height);
  transition: 2s;
  text-decoration: none;
}

.grid_item:hover .name {
  opacity: 1;
  transition: 1s;
}

.name {
  margin-top: 5px;
  opacity: 0;
  transition: 0.8s;
  font-size: medium;
}

.projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  row-gap: 25px;
  justify-items: center;
  margin-bottom: 200px;
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
  filter: saturate(60%);
  overflow: hidden;
  transition: 1s;
  height: var(--image-height);
}

.image_container:hover {
  filter: saturate(110%);
  transition: 2s;
}

.content_img {
  width: var(--image-width);
  transform: scale(1);
  transition: 1s;
  height: var(--image-height);
}

.content_img:hover {
  transform: scale(1.4);
  transform-origin: v-bind(offsetX + "% ") v-bind(offsetY + "% ");
  transition: transform 1s;
}

@media (max-width: 900px) {
  body {
    --m-image-width: calc((30vw * 2.33));
    --m-image-height: calc(var(--m-image-width) * 0.66);
    --m-grid-height: calc((var(--m-image-height) + 2vw));
  }

  .grid_container {
    display: block;
    position: relative;
    margin-top: 5vw;
  }

  .grid_item {
    filter: saturate(100%);
    height: var(--m-grid-height);
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 80px;
    justify-items: center;
    margin-bottom: 200px;
    align-items: end;
  }

  .image_border {
    filter: drop-shadow(0 0rem 0.6rem blue);
  }

  .image_container {
    height: var(--m-image-height);
  }

  .content_img {
    width: var(--m-image-width);
    height: var(--m-image-height);
  }

  .content_img:hover {
    transform: scale(1);
  }

  .name {
    margin-top: 10px;
    opacity: 1;
  }
}
</style>

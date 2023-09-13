<!-- SPA: here we're only changing views -->
<template>
  <header>
    <div class="nav_wrapper">
      <TheNavigation />
    </div>
  </header>
  <!-- Always renders the contents of the active page. -->
  <!---alter the key to rerender the component inside routerview--->
  <!-- only if view is '/work', pass in the image loaded and imageUrl -->
  <!-- <RouterView :key="$route.path" v-bind="$route.path=='/work' ? {newImages} : {}"></RouterView> -->
  <RouterView v-slot="{ Component }">
    <!--Random idea - implement konami code as fun easteregg?-->
    <Transition name="fade" mode="out-in">
      <!--pass in image array to the component-->
      <component
        :is="Component"
        :key="$route.path"
        v-bind="$route.path == '/work' ? { newImages } : {}"
      />
    </Transition>
  </RouterView>
  <div class="marquee">
    <!-- <p>@devushkabeam</p> -->
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
import sourceData from "@/data.json";
import { marked } from "marked";

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      projects: sourceData.projects,
      newImages: [],
    };
  },
  methods: {
    populateArray() {
      //do this on load to effectively preload portfolio images.
      const info = this.projects;
      for (const project in info) {
        const img = new Image();
        img.src = `/images/` + info[project].image;
        this.newImages.push(`/images/` + info[project].image);
        img.onload = () => {
          // console.log(this.newImages);
        };
      }
    }
  },
  mounted() {
    // const img = new Image()
    // img.src = this.imageUrl
    // img.onload = () => {
    //   this.isImageLoaded = true
    // }
    //preload all images
    this.populateArray();
    // console.log(this.newImages);
  },
};
</script>

<script setup>
import { ref, computed } from "vue";

const currentPath = ref(window.location.hash);
window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});
</script>

<style>
.fade-enter-active {
  transition: all 0.3s;
}
.fade-leave-active {
  transition: all 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleX(0.995);
}

.marquee {
  background: blue;
  position: fixed;
  width: 100%;
  max-height: 100px;
  bottom: 0;
  padding: 0;
  margin: 0;
  left: 0;
  /* filter: drop-shadow(0 0rem 4rem blue); */
  overflow: hidden;
  /* animation: glow-opacity 15s cubic-bezier(0, 0.1, 1, 0.8) infinite; */
}

.marquee p {
  font-family: "Codystar";
  margin: 0;
  font-size: 3ch;
  color: white;
  position: relative;
  transform: translateX(100%);
  animation: scroll-left 15s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes glow-opacity {
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.8;
  }
}
</style>

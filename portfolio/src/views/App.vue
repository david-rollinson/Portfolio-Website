<template>

  <header>
    <div class="nav_wrapper">
      <TheNavigation />
    </div>
  </header>

  <!-- only if view is '/work', pass in the image loaded and imageUrl -->
  <RouterView v-slot="{ Component }">
    <!--Random idea - implement konami code as fun easteregg?-->
    <Transition name="fade" mode="out-in">
      <component
        :is="Component"
        :key="$route.path"
        v-bind="$route.path == '/work' ? { newImages } : {}"
      />
    </Transition>
  </RouterView>

</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
import sourceData from "@/data.json";

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
      //do this on load to 'preload' portfolio images.
      const info = this.projects;
      for (const project in info) {
        const img = new Image();
        img.src = `/images/` + info[project].image;
        this.newImages.push(`/images/` + info[project].image);
        img.onload = () => {
        };
      }
    }
  },
  mounted() {
    //preload all images
    this.populateArray();
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

/* GLOBAL TRANSITION ANIM -----------*/
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

</style>

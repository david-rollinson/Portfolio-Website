import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Work from "@/views/Work.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// export to be picked up by main.js
export default router;

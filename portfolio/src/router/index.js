import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Work from "@/views/Work.vue";
import Info from "@/views/Info.vue";
import CV from "@/views/CV.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/work", name: "Work", component: Work },
  { path: "/info", name: "Info", component: Info },
  { path: "/cv", name: "CV", component: CV },
  //pass the project id over to the component.
  {
    path: "/work/:id/:slug",
    name: "project.show",
    component: () => import("@/views/DisplayDest.vue"),
    props: (route) => ({ id: parseInt(route.params.id) }),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// export to be picked up by main.js
export default router;

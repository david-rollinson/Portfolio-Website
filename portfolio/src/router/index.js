import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Maintenance from "../components/Maintenance.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/work",
      name: "Work",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Work.vue"),
    }
  ],
});

export default router;

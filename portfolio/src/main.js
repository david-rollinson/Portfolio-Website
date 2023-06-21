import { createApp, VueElement } from "vue";
import App from "./views/App.vue"
import router from "./router";
import "./assets/main.css";
/* For Strapi CMS integration. */
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";

/* For Markdown alternative. */

const app = createApp(App);

app.use(router);

app.mount("#app");

export default {
  /*prop declarations here*/
  }
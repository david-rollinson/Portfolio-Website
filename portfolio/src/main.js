import { createApp, VueElement } from "vue";
// import App from "./App.vue";
import "./assets/main.css";
import App from "./views/Maintenance.vue"
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

import { createApp, VueElement } from "vue";
import App from "./views/App.vue";
import router from "./router";
import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

export default {

};

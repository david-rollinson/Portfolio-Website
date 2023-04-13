import { createApp, VueElement } from "vue";
// import App from "./App.vue";
import App from "./views/Home.vue"
import router from "./router";
import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

export default {
    name: 'Counter', 
    data() {
      return {
        count: 10,
      }
    },
    methods: {
      intrement() {
        this.count += 1;
      }, 
      decrement() {
        this.count -= 1;
      }
    }
  }
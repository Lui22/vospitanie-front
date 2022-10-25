import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);

app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});

app.mount("#app");

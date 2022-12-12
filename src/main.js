import { createApp } from "vue";
import App from "./App.vue";
import MainComponent from "@/components/MainComponent.vue";
import "@/style.css";

const app = createApp(App);

app.component("main-component", MainComponent);

app.mount("#app");

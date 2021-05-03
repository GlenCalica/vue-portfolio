import { createApp } from "vue";

import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import AnimatedCard from "./components/UI/AnimatedCard.vue";

import "./index.css";
import "./assets/tailwind.css";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("animated-card", AnimatedCard);

app.mount("#app");

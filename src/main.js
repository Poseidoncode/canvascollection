import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

//event bus
import mitt from "mitt";
const emitter = mitt();

//ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//css
import "./styles/index.scss";

//pinia
import { createPinia } from 'pinia'

const app = createApp(App).use(router).use(ElementPlus).use(createPinia());


app.provide("emitter", emitter);
app.mount("#app");

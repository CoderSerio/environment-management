import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import router from "./routes";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(ElementPlus, {
	locale: zhCn,
});
app.use(router);

app.mount("#app");

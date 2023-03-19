import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Navbar from "./components/Navbar.vue";
import "./style.css";
import "./assets/js/script"
const app = createApp(App);

app.use(router);
app.component("Navbar", Navbar);

app.mount("#app");

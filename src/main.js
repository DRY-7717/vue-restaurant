import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vue-toast-notification/dist/theme-sugar.css";
import Navbar from "./components/Navbar.vue";
import Navbar2 from "./components/Navbar2.vue";
import "./style.css";
import "./assets/js/script";
const app = createApp(App);

app.use(router);
app.component("Navbar", Navbar);
app.component("Navbar2", Navbar2);

app.mount("#app");

import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import App from "./App.vue";
import quasarUserOptions from "./quasar-user-options";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(Quasar, quasarUserOptions);
app.use(router);
// The app uses hash-based routing, so in-page anchors like href="#voices"
// would be treated as route changes. Intercept them and just scroll instead.
// Router links ("#/path") are left alone.
document.addEventListener("click", (e) => {
  const link = e.target.closest?.('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute("href").slice(1);
  if (!id || id.startsWith("/")) return;
  const target = document.getElementById(decodeURIComponent(id));
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

app.mount("#app");

import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

const routes = [
  {
    path: "/",
    component: defineAsyncComponent(() => import("../pages/Homepage.vue")),
    name: "Homepage",
  },
  {
    path: "/about",
    component: defineAsyncComponent(() => import("../pages/About.vue")),
    name: "About",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

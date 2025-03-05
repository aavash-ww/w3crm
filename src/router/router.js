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
  {
    path: "/faq",
    component: defineAsyncComponent(() => import("../pages/FAQ.vue")),
    name: "FAQ",
  },
  {
    path: "/contacts",
    component: defineAsyncComponent(() => import("../pages/Contacts.vue")),
    name: "Contacts",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

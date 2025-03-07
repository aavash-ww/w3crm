import { createRouter, createWebHistory } from "vue-router";

import Homepage from "../pages/Homepage.vue";
import About from "../pages/About.vue";
import FAQ from "../pages/FAQ.vue";
import Contacts from "../pages/Contacts.vue";
import Resources from "../pages/Resources.vue";
import Whyw3 from "../pages/Whyw3.vue";
import Pricing from "../pages/Pricing.vue";
import Products from "../pages/Products.vue";

const routes = [
  { path: "/", component: Homepage, name: "Homepage" },
  { path: "/about", component: About, name: "About" },
  { path: "/faq", component: FAQ, name: "FAQ" },
  { path: "/contacts", component: Contacts, name: "Contacts" },
  { path: "/resources", component: Resources, name: "Resouces" },
  { path: "/pricing", component: Pricing, name: "Pricing" },
  { path: "/why-w3", component: Whyw3, name: "why-w3" },
  { path: "/products", component: Products, name: "products" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

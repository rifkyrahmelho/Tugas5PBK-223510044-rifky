import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Shop from "@/views/Shop.vue";
import Contact from "@/views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "mainLayout",
      component: MainLayout,
      children: [
        {
          path: "/",
          component: Home,
        },
        {
          path: "/about",
          component: About,
        },
        {
          path: "/shop",
          component: Shop,
        },
        {
          path: "/contact",
          component: Contact,
        },
      ],
    },
  ],
});
export default router;

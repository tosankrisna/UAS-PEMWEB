import { createRouter, createWebHistory } from "vue-router";
import Kasir from "../views/dashboard/kasir/Kasir.vue";
import AddKasir from "../views/../views/dashboard/kasir/AddKasir.vue";
import EditKasir from "../views/../views/dashboard/kasir/EditKasir.vue";

const routes = [
  {
    path: "/",
    name: "Kasir",
    component: Kasir,
  },
  {
    path: "/add-kasir",
    name: "AddKasir",
    component: AddKasir,
  },
  {
    path: "/edit-kasir",
    name: "EditKasir",
    component: EditKasir,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

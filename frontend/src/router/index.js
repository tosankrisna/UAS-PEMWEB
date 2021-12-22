import { createRouter, createWebHistory } from "vue-router";
import Kasir from "../views/dashboard/kasir/Kasir.vue";
import AddKasir from "../views/../views/dashboard/kasir/AddKasir.vue";
import EditKasir from "../views/../views/dashboard/kasir/EditKasir.vue";
import Barang from "../views/../views/dashboard/barang/Barang.vue";
import AddBarang from "../views/../views/dashboard/barang/AddBarang.vue";
import EditBarang from "../views/../views/dashboard/barang/EditBarang.vue";

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
  {
    path: "/barang",
    name: "Barang",
    component: Barang,
  },
  {
    path: "/add-barang",
    name: "AddBarang",
    component: AddBarang,
  },
  {
    path: "/edit-barang",
    name: "EditBarang",
    component: EditBarang,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login/Login.vue";
import Profil from "../views/dashboard/profil/Profil.vue";
import Kasir from "../views/dashboard/kasir/Kasir.vue";
import AddKasir from "../views/../views/dashboard/kasir/AddKasir.vue";
import EditKasir from "../views/../views/dashboard/kasir/EditKasir.vue";
import Barang from "../views/../views/dashboard/barang/Barang.vue";
import AddBarang from "../views/../views/dashboard/barang/AddBarang.vue";
import EditBarang from "../views/../views/dashboard/barang/EditBarang.vue";
import Transaksi from "../views/../views/dashboard/transaksi/Transaksi.vue";
import AddTransaksi from "../views/../views/dashboard/transaksi/AddTransaksi.vue";
import DetailTransaksi from "../views/../views/dashboard/transaksi/DetailTransaksi.vue";
import StrukTransaksi from "../views/../views/dashboard/transaksi/StrukTransaksi.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profil/:nip",
    name: "Profil",
    component: Profil,
  },
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
    path: "/edit-kasir/:nip",
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
    path: "/edit-barang/:kode_barang",
    name: "EditBarang",
    component: EditBarang,
  },
  {
    path: "/transaksi",
    name: "Transaksi",
    component: Transaksi,
  },
  {
    path: "/add-transaksi",
    name: "AddTransaksi",
    component: AddTransaksi,
  },
  {
    path: "/detail-transaksi/:kode_transaksi",
    name: "DetailTransaksi",
    component: DetailTransaksi,
  },
  {
    path: "/struk-transaksi/:kode_transaksi",
    name: "StrukTransaksi",
    component: StrukTransaksi,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("login"));
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  if (to.name === "Login" && isAuthenticated) next({ name: "Kasir" });
  else next();
});

export default router;

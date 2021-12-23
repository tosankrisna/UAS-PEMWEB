<template>
  <ul
    class="navbar-nav bg-white sidebar sidebar-white accordion"
    :class="{ toggled: isToggle }"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <router-link
      class="sidebar-brand d-flex align-items-center justify-content-center"
      to="/"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-dollar-sign"></i>
      </div>
      <div class="sidebar-brand-text mx-3">Kasirku</div>
    </router-link>

    <hr class="sidebar-divider my-0" />

    <hr class="sidebar-divider" />

    <div class="sidebar-heading">Menu</div>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Kasir' }">
        <i class="fas fa-user fa-cog"></i>
        <span class="ml-3">Kasir</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Barang' }">
        <i class="fas fa-shopping-bag fa-cog"></i>
        <span class="ml-3">Barang</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="#">
        <i class="fas fa-hand-holding-usd fa-cog"></i>
        <span class="ml-3">Transaksi</span>
      </router-link>
    </li>
    <!-- <li class="nav-item">
      <router-link class="nav-link" to="#">
        <i class="fas fa-history fa-cog"></i>
        <span class="ml-3">History</span>
      </router-link>
    </li> -->
  </ul>
</template>

<script>
export default {
  props: ["isToggle"],
};
</script>

<style scoped>
.toggled span {
  margin-left: 0 !important;
}
</style>

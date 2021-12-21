<template>
  <ul
    class="navbar-nav bg-white sidebar sidebar-white accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="index.html"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-dollar-sign"></i>
      </div>
      <div class="sidebar-brand-text mx-3">Kasirku</div>
    </a>

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
      <router-link class="nav-link" to="#">
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
    <li class="nav-item">
      <router-link class="nav-link" to="#">
        <i class="fas fa-history fa-cog"></i>
        <span class="ml-3">History</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style></style>

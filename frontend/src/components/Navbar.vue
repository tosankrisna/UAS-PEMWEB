<template>
  <nav
    class="navbar navbar-expand navbar-white bg-white topbar mb-4 static-top shadow"
  >
    <!-- Sidebar Toggle (Topbar) -->
    <button
      id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3"
      @click="toggleSidebar"
    >
      <i class="fa fa-bars"></i>
    </button>

    <div class="text-center d-none d-md-inline">
      <button
        class="btn btn-md outline-0 border-0"
        id="sidebarToggle"
        @click="toggleSidebar"
      >
        <div class="fas fa-bars"></div>
      </button>
    </div>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <!-- Nav Item - User Information -->
      <li
        class="nav-item dropdown no-arrow"
        :class="{ show: isShow }"
        @click="showDropdown"
      >
        <span
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="mr-2 d-none d-lg-inline text-gray-600 small"
            >Douglas McGee</span
          >
          <img class="img-profile rounded-circle" src="/images/person.png" />
        </span>
        <!-- Dropdown - User Information -->
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          :class="{ show: isShow }"
          aria-labelledby="userDropdown"
        >
          <router-link :to="{ name: 'Profil' }" class="dropdown-item">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </router-link>
          <div class="dropdown-divider"></div>
          <router-link
            :to="{ name: 'Login' }"
            class="dropdown-item"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </router-link>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggleSidebar() {
      return this.$emit("toggleSidebar");
    },
    showDropdown() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style></style>

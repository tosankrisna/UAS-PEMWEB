<template>
  <div id="wrapper" v-if="isNotRoutes">
    <Sidebar :isToggle="isToggle" />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Navbar @toggleSidebar="isToggle = !isToggle" />
        <router-view :key="$route.path" />
      </div>
    </div>
  </div>

  <div class="container" v-else>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default {
  components: { Sidebar, Navbar },
  data() {
    return {
      isToggle: false,
    };
  },
  computed: {
    isNotRoutes() {
      return (
        this.$route.name !== "Login" && this.$route.name !== "StrukTransaksi"
      );
    },
  },
};
</script>

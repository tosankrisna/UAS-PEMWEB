<template>
  <div id="wrapper" v-if="isNotLogin">
    <Sidebar :isToggle="isToggle" />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Navbar @toggleSidebar="isToggle = !isToggle" />
        <router-view />
      </div>
    </div>
  </div>

  <div class="container" v-else>
    <router-view />
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
    isNotLogin() {
      return this.$route.name !== "Login";
    },
  },
};
</script>

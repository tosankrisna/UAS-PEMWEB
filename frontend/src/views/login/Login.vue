<template>
  <div class="row d-flex align-items-center justify-content-center login">
    <div
      class="col col-12 col-md-8 col-lg-6 p-5 shadow p-3 mb-5 bg-body rounded"
    >
      <Login />
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
export default {
  components: {
    Login,
  },
};
</script>

<style scoped>
.login {
  margin-top: 20%;
}
</style>

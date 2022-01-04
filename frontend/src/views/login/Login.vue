<template>
  <div class="row d-flex align-items-center justify-content-center login">
    <div
      class="col col-12 col-md-8 col-lg-6 p-5 shadow p-3 mb-5 bg-body rounded"
    >
      <div class="title text-center mb-4">
        <h2 class="text-dark">Login</h2>
      </div>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="nip" class="form-label">NIP</label>
          <input type="number" class="form-control" id="nip" v-model="nip" />
        </div>
        <div class="mb-5">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="password"
          />
        </div>
        <button
          type="submit"
          class="btn btn-md rounded-pill p-2 mb-5 btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";

export default {
  data() {
    return {
      nip: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const res = await axios.get(
        `http://localhost:8080/api/admin/login?nip=${this.nip}&password=${this.password}`
      );
      if (res.data) {
        this.$router.push("/");
        localStorage.setItem("login", true);
        localStorage.setItem("nip", res.data.nip);
        localStorage.setItem("level", res.data.level);
      } else {
        Swal.fire({
          title: "Error!",
          text: "Username atau password salah!",
          icon: "error",
          confirmButtonText: "Confirm",
        });
      }
    },
  },
};
</script>

<style scoped>
.login {
  margin-top: 15%;
}
.btn {
  width: 100%;
}
</style>

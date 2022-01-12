<template>
  <Card>
    <template v-slot:header>Edit Profile</template>
    <template v-slot:content>
      <form @submit.prevent="updateProfile">
        <div class="mb-3">
          <label for="nip" class="form-label">No Induk Pegawai</label>
          <input
            type="number"
            class="form-control"
            id="nip"
            name="nip"
            v-model="profile.nip"
            readonly
          />
        </div>
        <div class="mb-3">
          <label for="nama" class="form-label">Nama Lengkap</label>
          <input
            type="text"
            class="form-control"
            id="nama"
            v-model="profile.nama"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="profile.password"
          />
        </div>
        <div class="mb-4">
          <label for="jenis_kelamin" class="form-label">Jenis Kelamin</label>
          <select
            class="form-select form-control"
            name="jenis_kelamin"
            aria-label="Default select example"
            v-model="profile.jenis_kelamin"
          >
            <option
              value="laki-laki"
              :selected="profile.jenis_kelamin == 'laki-laki'"
            >
              Laki-Laki
            </option>
            <option
              value="perempuan"
              :selected="profile.jenis_kelamin == 'perempuan'"
            >
              Perempuan
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="alamat" class="form-label">Alamat</label>
          <textarea class="form-control" id="alamat" v-model="profile.alamat" />
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary mr-3">Submit</button>
          <a @click="this.$router.go(-1)" class="btn btn-danger">Batal</a>
        </div>
      </form>
    </template>
  </Card>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
  components: { Card },
  data() {
    return {
      profile: {
        nip: "",
        nama: "",
        password: "",
        jenis_kelamin: "",
        alamat: "",
        level: "",
      },
    };
  },
  methods: {
    async getProfileById() {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/admin/${this.$route.params.nip}`
        );
        this.profile = {
          nip: res.data.nip,
          nama: res.data.nama,
          password: res.data.password,
          jenis_kelamin: res.data.jenis_kelamin,
          alamat: res.data.alamat,
          level: res.data.level,
        };
      } catch (error) {
        console.log(error);
      }
    },
    async updateProfile() {
      try {
        const res = await axios.put(
          `http://localhost:8080/api/admin/update/${this.$route.params.nip}`,
          this.profile
        );
        this.$router.go(-1);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getProfileById();
  },
};
</script>

<style></style>

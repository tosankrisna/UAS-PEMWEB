<template>
  <Card>
    <template v-slot:header>Edit Kasir</template>
    <template v-slot:content>
      <form @submit.prevent="updateKasir">
        <div class="mb-3">
          <label for="nip" class="form-label">No Induk Pegawai</label>
          <input
            type="number"
            class="form-control"
            id="nip"
            name="nip"
            v-model="kasir.nip"
          />
        </div>
        <div class="mb-3">
          <label for="nama" class="form-label">Nama Lengkap</label>
          <input
            type="text"
            class="form-control"
            id="nama"
            v-model="kasir.nama"
          />
        </div>
        <div class="mb-4">
          <label for="jenis_kelamin" class="form-label">Jenis Kelamin</label>
          <select
            class="form-select form-control"
            name="jenis_kelamin"
            aria-label="Default select example"
            v-model="kasir.jenis_kelamin"
          >
            <option
              value="laki-laki"
              :selected="kasir.jenis_kelamin == 'laki-laki'"
            >
              Laki-Laki
            </option>
            <option
              value="perempuan"
              :selected="kasir.jenis_kelamin == 'perempuan'"
            >
              Perempuan
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="alamat" class="form-label">Alamat</label>
          <textarea class="form-control" id="alamat" v-model="kasir.alamat" />
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary mr-3">Submit</button>
          <router-link to="/" class="btn btn-danger">Batal</router-link>
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
      kasir: {
        nip: "",
        nama: "",
        password: "",
        jenis_kelamin: "",
        alamat: "",
        level: "kasir",
      },
    };
  },
  methods: {
    async getKasirById() {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/admin/${this.$route.params.nip}`
        );
        this.kasir = {
          nip: res.data.nip,
          nama: res.data.nama,
          password: res.data.password,
          jenis_kelamin: res.data.jenis_kelamin,
          alamat: res.data.alamat,
        };
      } catch (error) {
        console.log(error);
      }
    },
    async updateKasir() {
      try {
        const res = await axios.put(
          `http://localhost:8080/api/admin/update/${this.$route.params.nip}`,
          this.kasir
        );
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getKasirById();
  },
};
</script>

<style></style>

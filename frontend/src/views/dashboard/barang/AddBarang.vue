<template>
  <Card>
    <template v-slot:header>Tambah Barang</template>
    <template v-slot:content>
      <form @submit.prevent="addBarang">
        <div class="mb-3">
          <label for="kode_barang" class="form-label">Kode Barang</label>
          <input
            type="number"
            class="form-control"
            id="kode_barang"
            name="kode_barang"
            v-model="barang.kode_barang"
          />
        </div>
        <div class="mb-3">
          <label for="nama" class="form-label">Nama Barang</label>
          <input
            type="text"
            class="form-control"
            id="nama"
            v-model="barang.nama"
          />
        </div>
        <div class="mb-3">
          <label for="stok" class="form-label">Stok Barang</label>
          <input
            type="number"
            class="form-control"
            id="stok"
            name="stok"
            v-model="barang.stok"
          />
        </div>
        <div class="mb-3">
          <label for="harga" class="form-label">Harga Barang</label>
          <input
            type="number"
            class="form-control"
            id="harga"
            name="harga"
            v-model="barang.harga"
          />
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary mr-3">Submit</button>
          <router-link to="/barang" class="btn btn-danger">Batal</router-link>
        </div>
      </form>
    </template>
  </Card>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
  data() {
    return {
      barang: {
        kode_barang: "",
        nama: "",
        stok: "",
        harga: "",
      },
    };
  },
  components: { Card },
  methods: {
    addBarang() {
      try {
        axios
          .post("http://localhost:8080/api/barang/add", this.barang)
          .then(() => this.$router.push("/barang"));
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>

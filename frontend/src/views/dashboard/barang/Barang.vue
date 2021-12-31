<template>
  <Table>
    <template v-slot:header>Data Barang</template>
    <template v-slot:search>
      <Search />
    </template>
    <template v-slot:addButton>
      <router-link :to="{ name: 'AddBarang' }" class="btn btn-primary btn-md"
        >Tambah Data</router-link
      >
    </template>
    <template v-slot:content>
      <table
        class="table table-bordered dataTable"
        id="dataTable"
        width="100%"
        cellspacing="0"
        role="grid"
        aria-describedby="dataTable_info"
        style="width: 100%"
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Kode Barang</th>
            <th>Nama Barang</th>
            <th>Stok</th>
            <th>Harga</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in barang.slice().reverse()" :key="data.id">
            <td>{{ index + 1 }}</td>
            <td>{{ data.kode_barang }}</td>
            <td>{{ data.nama }}</td>
            <td>{{ data.stok }}</td>
            <td>Rp. {{ data.harga }}</td>
            <td>
              <router-link
                class="btn btn-sm btn-warning mr-2"
                :to="{
                  name: 'EditBarang',
                  params: { kode_barang: data.kode_barang },
                }"
                >Edit</router-link
              >
              <button
                class="btn btn-sm btn-danger"
                @click="deleteBarang(data.kode_barang)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
    <template v-slot:pagination>
      <Pagination />
    </template>
  </Table>
</template>

<script>
import axios from "axios";
import Table from "@/components/Table.vue";
import Search from "@/components/Search.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "Barang",
  data() {
    return {
      barang: [],
    };
  },
  components: {
    Table,
    Search,
    Pagination,
  },
  methods: {
    getAllBarang() {
      try {
        axios
          .get("http://localhost:8080/api/barang")
          .then((res) => (this.barang = res.data));
      } catch (error) {
        console.log(error);
      }
    },
    deleteBarang(kode_barang) {
      try {
        axios
          .delete(`http://localhost:8080/api/barang/delete/${kode_barang}`)
          .then(
            () =>
              (this.barang = this.barang.filter(
                (item) => item.kode_barang !== kode_barang
              ))
          );
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getAllBarang();
  },
};
</script>

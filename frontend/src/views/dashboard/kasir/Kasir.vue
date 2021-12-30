<template>
  <Table>
    <template v-slot:header>Data Kasir</template>
    <template v-slot:search>
      <Search />
    </template>
    <template v-slot:addButton>
      <router-link to="/add-kasir" class="btn btn-primary btn-md"
        >Tambah Data</router-link
      ></template
    >
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
            <th>NIP</th>
            <th>Nama Lengkap</th>
            <th>Jenis Kelamin</th>
            <th>Alamat</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in kasir.slice().reverse()" :key="data.id">
            <td>{{ index + 1 }}</td>
            <td>{{ data.nip }}</td>
            <td>{{ data.nama }}</td>
            <td>{{ data.jenis_kelamin }}</td>
            <td>{{ data.alamat }}</td>
            <td>
              <router-link
                class="btn btn-sm btn-warning mr-2"
                :to="{ name: 'EditKasir', params: { nip: data.nip } }"
                >Edit</router-link
              >
              <button
                class="btn btn-sm btn-danger"
                @click="deleteKasir(data.nip)"
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
  name: "Kasir",
  data() {
    return {
      kasir: [],
    };
  },
  components: {
    Table,
    Search,
    Pagination,
  },
  methods: {
    getAllKasir() {
      try {
        axios
          .get("http://localhost:3000/api/admin/")
          .then((res) => (this.kasir = res.data));
      } catch (error) {
        console.log(error);
      }
    },
    deleteKasir(nip) {
      try {
        axios
          .delete(`http://localhost:3000/api/admin/delete/${nip}`)
          .then(
            (res) =>
              (this.kasir = this.kasir.filter((item) => item.nip !== nip))
          );
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getAllKasir();
  },
};
</script>

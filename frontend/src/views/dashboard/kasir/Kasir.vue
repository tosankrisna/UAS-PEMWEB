<template>
  <Table>
    <template v-slot:header>Data Kasir</template>
    <template v-slot:search>
      <Search @search-data="searchKasir" />
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
        <tbody class="text-capitalize">
          <tr
            v-for="(data, index) in isNotAdmin.slice().reverse()"
            :key="data.id"
          >
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
  </Table>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
import Table from "@/components/Table.vue";
import Search from "@/components/Search.vue";

export default {
  name: "Kasir",
  data() {
    return {
      kasir: [],
      search: "",
    };
  },
  components: {
    Table,
    Search,
  },
  methods: {
    async getAllKasir() {
      try {
        const res = await axios.get("http://localhost:8080/api/admin/");
        this.kasir = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    deleteKasir(nip) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-primary",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Delete",
          cancelButtonText: "Cancel",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`http://localhost:8080/api/admin/delete/${nip}`)
              .then(() => {
                this.kasir = this.kasir.filter((item) => item.nip !== nip);

                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your data has been deleted.",
                  "success"
                );
              })
              .catch((err) => console.log(err));
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your data is safe :)",
              "error"
            );
          }
        });
    },
    async searchKasir(search) {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/admin?search=${search}`
        );
        this.kasir = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    isNotAdmin() {
      return this.kasir.filter((item) => {
        return item.level !== "admin";
      });
    },
  },
  mounted() {
    this.getAllKasir();
  },
};
</script>

<style>
.swal2-actions .swal2-cancel {
  margin-right: 10px !important;
}
</style>

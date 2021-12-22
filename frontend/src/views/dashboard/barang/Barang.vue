<template>
  <Table>
    <template v-slot:header>Data Barang</template>
    <template v-slot:addButton>
      <router-link to="/add-barang" class="btn btn-primary btn-md"
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
          <tr>
            <td>1</td>
            <td>190181291</td>
            <td>Minyak Goreng Tropical 500ml</td>
            <td>145</td>
            <td>Rp. 18.000</td>
            <td>
              <router-link class="btn btn-sm btn-warning mr-2" to="/edit-barang"
                >Edit</router-link
              >
              <router-link class="btn btn-sm btn-danger" to="#"
                >Delete</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </Table>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Table from "@/components/Table.vue";
export default {
  name: "Barang",
  components: { Sidebar, Navbar, Table },
};
</script>

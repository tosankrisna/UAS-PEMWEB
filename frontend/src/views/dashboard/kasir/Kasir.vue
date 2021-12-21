<template>
  <Table>
    <template v-slot:header>Data Kasir</template>
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
          <tr>
            <td>1</td>
            <td>123456</td>
            <td>Andi Sentosa</td>
            <td>Laki-Laki</td>
            <td>Jalan Waturenggong Gang 3 No.5A</td>
            <td>
              <router-link
                class="btn btn-sm btn-warning mr-2"
                :to="{ name: 'EditKasir' }"
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
  name: "Kasir",
  components: { Sidebar, Navbar, Table },
};
</script>

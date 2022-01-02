<template>
  <Table>
    <template v-slot:header>Data Transaksi</template>
    <template v-slot:search>
      <Search @search-data="searchBarang" />
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
            <th>Kode Transaksi</th>
            <th>Tanggal Transaksi</th>
            <th>Total Transaksi</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>8101929101</td>
            <td>24-12-2021</td>
            <td>Rp. 100.000</td>
            <td>
              <router-link
                :to="{ name: 'DetailTransaksi' }"
                class="btn btn-sm btn-warning mr-2"
                >Detail</router-link
              >
              <button @click="goToPrint" class="btn btn-sm btn-primary mr-2">
                Cetak Struk
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </Table>
</template>

<script>
import axios from "axios";
import Table from "@/components/Table.vue";
import Search from "@/components/Search.vue";

export default {
  components: { Table, Search },
  methods: {
    goToPrint() {
      let route = this.$router.resolve({ name: "StrukTransaksi" });
      const struk = window.open(route.href, "", "status=0");
      struk.print();
    },
  },
};
</script>

<style></style>

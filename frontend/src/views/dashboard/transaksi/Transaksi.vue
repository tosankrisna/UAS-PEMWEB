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
          <tr
            v-for="(transaction, index) in transactions"
            :key="transaction.id"
          >
            <td>{{ index + 1 }}</td>
            <td class="text-uppercase">{{ transaction.kode_pembayaran }}</td>
            <td>{{ setTime(transaction.tgl_pembayaran) }}</td>
            <td>Rp. {{ transaction.total_harga }}</td>
            <td>
              <router-link
                :to="{
                  name: 'DetailTransaksi',
                  params: { kode_transaksi: transaction.kode_pembayaran },
                }"
                class="btn btn-sm btn-warning mr-2"
                >Detail</router-link
              >
              <button
                @click="goToPrint(transaction.kode_pembayaran)"
                class="btn btn-sm btn-primary mr-2"
              >
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
import moment from "moment";
import Table from "@/components/Table.vue";
import Search from "@/components/Search.vue";

export default {
  components: { Table, Search },
  data() {
    return {
      transactions: null,
    };
  },
  methods: {
    goToPrint(kode) {
      let route = this.$router.resolve({
        name: "StrukTransaksi",
        params: { kode_transaksi: kode },
      });
      const struk = window.open(route.href, "", "status=0");
      struk.print();
    },
    async getAllTransactions() {
      const res = await axios.get("http://localhost:8080/api/pembayaran/");
      this.transactions = res.data;
    },
    setTime(time) {
      return (
        moment(time).locale("id").format("L") +
        " " +
        moment(time).locale("id").format("LT")
      );
    },
    async searchBarang(search) {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/pembayaran?search=${search}`
        );
        this.transactions = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getAllTransactions();
  },
};
</script>

<style></style>

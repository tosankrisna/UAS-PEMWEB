<template>
  <h1 class="text-center mb-3">Laporan Transaksi Penjualan</h1>
  <h6 class="text-center mb-4">
    Tanggal {{ setTime(this.$route.params.start_date) }} -
    {{ setTime(this.$route.params.end_date) }}
  </h6>
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
        <th>Tgl Transaksi</th>
        <th>Kode Transaksi</th>
        <th>Barang</th>
        <th>Jml Pembelian</th>
        <th>Harga</th>
        <th>Subtotal</th>
        <th>Total Pembayaran</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(transaction, index) in transactions" :key="transaction.id">
        <td>{{ index + 1 }}</td>
        <td>{{ setTime(transaction.tgl_pembayaran) }}</td>
        <td class="text-uppercase">
          {{ transaction.kode_pembayaran }}
        </td>
        <td class="p-0">
          <tr v-for="barang in transaction.barangs" :key="barang.id">
            <td class="text-capitalize py-1 px-1 border-0" id="border-col">
              {{ barang.nama }}
            </td>
          </tr>
        </td>
        <td class="p-0">
          <tr v-for="barang in transaction.barangs" :key="barang.id">
            <td class="py-1 px-1 border-0" id="border-col">
              x{{ barang.pembayaran_barang.jumlah_pembelian }}
            </td>
          </tr>
        </td>
        <td class="p-0">
          <tr v-for="barang in transaction.barangs" :key="barang.id">
            <td class="py-1 px-1 border-0" id="border-col">
              {{ barang.harga }}
            </td>
          </tr>
        </td>
        <td class="p-0">
          <tr v-for="barang in transaction.barangs" :key="barang.id">
            <td class="py-1 px-1 border-0" id="border-col">
              {{ barang.harga * barang.pembayaran_barang.jumlah_pembelian }}
            </td>
          </tr>
        </td>
        <td>{{ transaction.total_harga }}</td>
      </tr>
      <tr>
        <td colspan="7" class="text-right font-weight-bold">
          <p>Total</p>
        </td>
        <td class="font-weight-bold">Rp. {{ sumTransaction }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";

export default {
  data() {
    return {
      startDate: "",
      endDate: "",
      transactions: [],
    };
  },
  methods: {
    async getTransactionByDate() {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/pembayaran/report?startDate=${this.$route.params.start_date}&endDate=${this.$route.params.end_date}`
        );

        this.transactions = res.data;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    setTime(time) {
      return moment(time).locale("id").format("L");
    },
  },
  computed: {
    sumTransaction() {
      return this.transactions
        .map((item) => item.total_harga)
        .reduce((prev, curr) => prev + curr, 0);
    },
  },
  mounted() {
    this.getTransactionByDate();
  },
};
</script>

<style>
@media print {
  #border-col {
    border: 0 !important;
  }
}
</style>

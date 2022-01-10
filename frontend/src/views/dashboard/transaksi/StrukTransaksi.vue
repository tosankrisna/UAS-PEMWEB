<template>
  <div class="container">
    <h3 class="text-dark text-center mt-5">Bukti Pembayaran</h3>
    <h5 class="text-dark text-center mt-3">== Mini Market Sentosa ==</h5>
    <p class="text-dark text-center mt-3">Jalan ABCD No.1 Denpasar</p>
    <div class="row mt-5 d-flex text-center">
      <div class="col">
        Nama Kasir:
        <span class="text-capitalize">{{ transaction.nama_kasir }}</span>
      </div>
    </div>
    <div
      class="row mt-3 mb-2 d-flex text-center justify-content-center content"
    >
      <div class="col">
        No. Transaksi :
        <span class="text-uppercase">{{ transaction.no_transaksi }}</span>
      </div>
      <div class="col">
        Tanggal Transaksi : {{ setTime(transaction.tgl_transaksi) }}
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <span v-for="x in 80">=</span>
    </div>
    <div class="row my-2 d-flex justify-content-center text-center content">
      <table class="table table-borderless">
        <thead>
          <tr>
            <th class="font-weight-bold">Nama Barang</th>
            <th class="font-weight-bold">Harga</th>
            <th class="font-weight-bold">Jumlah Beli</th>
            <th class="font-weight-bold">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="barang in transaction.barang" :key="barang.id">
            <td class="text-capitalize">{{ barang.nama }}</td>
            <td>Rp. {{ barang.harga }}</td>
            <td>x{{ barang.pembayaran_barang.jumlah_pembelian }}</td>
            <td>
              Rp. {{ barang.pembayaran_barang.jumlah_pembelian * barang.harga }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex justify-content-center">
      <span v-for="x in 80">=</span>
    </div>
    <div class="row my-2 d-flex text-center justify-content-center content">
      <div class="col"><h5 class="font-weight-bold">Total Transaksi</h5></div>
      <div class="col">
        <h5 class="font-weight-bold">Rp. {{ transaction.total_transaksi }}</h5>
      </div>
    </div>
    <div class="row my-2 d-flex text-center justify-content-center content">
      <div class="col"><h5 class="font-weight-bold">Bayar</h5></div>
      <div class="col">
        <h5 class="font-weight-bold">Rp. {{ transaction.bayar }}</h5>
      </div>
    </div>
    <div class="row my-2 d-flex text-center justify-content-center content">
      <div class="col"><h5 class="font-weight-bold">Kembalian</h5></div>
      <div class="col">
        <h5 class="font-weight-bold">Rp. {{ transaction.kembalian }}</h5>
      </div>
    </div>
    <div
      class="row mt-5 mb-3 d-flex text-center justify-content-center content"
    >
      <h6 class="text-uppercase font-weight-bold">
        Terimakasih sudah berbelanja kebutuhan anda di toko kami. Barang yang
        sudah dibeli tidak dapat ditukar atau dikembalikan
      </h6>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      transaction: {},
    };
  },
  methods: {
    async setStrukItem() {
      const res = await axios.get(
        `http://localhost:8080/api/pembayaran/${this.$route.params.kode_transaksi}`
      );

      this.transaction = {
        nama_kasir: res.data.admin.nama,
        no_transaksi: res.data.kode_pembayaran,
        tgl_transaksi: res.data.tgl_pembayaran,
        barang: res.data.barangs,
        total_transaksi: res.data.total_harga,
        bayar: res.data.bayar,
        kembalian: res.data.kembalian,
      };

      console.log(this.transaction);
    },
    setTime(time) {
      return (
        moment(time).locale("id").format("L") +
        " " +
        moment(time).locale("id").format("LT")
      );
    },
  },
  mounted() {
    this.setStrukItem();
  },
};
</script>

<style scoped>
.content {
  padding: 0 100px;
}
</style>

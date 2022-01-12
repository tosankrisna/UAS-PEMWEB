<template>
  <Table>
    <template v-slot:header>Detail Transaksi</template>
    <template v-slot:content>
      <div class="row">
        <table
          class="table table-bordered dataTable"
          id="dataTable"
          width="100%"
          cellspacing="0"
          role="grid"
          aria-describedby="dataTable_info"
          style="width: 100%"
        >
          <tr>
            <td class="font-weight-bold">Kode Transaksi</td>
            <td class="text-uppercase">{{ transaction.no_transaksi }}</td>
          </tr>
          <tr>
            <td class="font-weight-bold">Tanggal Transaksi</td>
            <td>{{ setTime(transaction.tgl_transaksi) }}</td>
          </tr>
          <tr>
            <td class="font-weight-bold">Total Transaksi</td>
            <td>Rp. {{ transaction.total_transaksi }}</td>
          </tr>
          <tr>
            <td class="font-weight-bold">Bayar</td>
            <td>Rp. {{ transaction.bayar }}</td>
          </tr>
          <tr>
            <td class="font-weight-bold">Kembalian</td>
            <td>Rp. {{ transaction.kembalian }}</td>
          </tr>
          <tr>
            <td class="font-weight-bold">Kasir</td>
            <td class="text-capitalize">{{ transaction.nama_kasir }}</td>
          </tr>
          <tr>
            <td class="font-weight-bold">Daftar Belanja</td>
            <td>
              <table class="table table-bordered border-black">
                <thead>
                  <tr>
                    <th class="font-weight-bold">No</th>
                    <th class="font-weight-bold">Nama Barang</th>
                    <th class="font-weight-bold">Harga Satuan</th>
                    <th class="font-weight-bold">Jumlah Beli</th>
                    <th class="font-weight-bold">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(barang, index) in transaction.barang"
                    :key="barang.id"
                  >
                    <td>{{ index + 1 }}</td>
                    <td class="text-capitalize">{{ barang.nama }}</td>
                    <td>Rp. {{ barang.harga }}</td>
                    <td>x{{ barang.pembayaran_barang.jumlah_pembelian }}</td>
                    <td>
                      Rp.
                      {{
                        barang.pembayaran_barang.jumlah_pembelian * barang.harga
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <div class="p-3">
              <router-link to="/transaksi" class="btn btn-danger"
                >Kembali</router-link
              >
            </div>
          </tr>
        </table>
      </div>
    </template>
  </Table>
</template>

<script>
import axios from "axios";
import moment from "moment";
import Table from "@/components/Table.vue";

export default {
  components: { Table },
  data() {
    return {
      transaction: {},
    };
  },
  methods: {
    async getTransaction() {
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
    this.getTransaction();
  },
};
</script>

<style></style>

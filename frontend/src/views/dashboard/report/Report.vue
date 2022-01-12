<template>
  <Card>
    <template v-slot:header>Report Transaksi</template>
    <template v-slot:content>
      <form class="row d-flex">
        <div class="col col-lg-4">
          <label for="start_date" class="form-label">Dari Tanggal</label>
          <input
            type="date"
            class="form-control"
            id="start_date"
            name="start_date"
            v-model="startDate"
          />
        </div>
        <div class="col col-lg-4">
          <label for="end_date" class="form-label">Sampai Tanggal</label>
          <input
            type="date"
            class="form-control"
            id="end_date"
            name="end_date"
            v-model="endDate"
          />
        </div>
        <div class="col col-lg-2">
          <label for="nip" class="form-label">Action</label>
          <div class="d-flex action">
            <button
              class="btn btn-md btn-primary form-control"
              @click.prevent="getTransactionByDate"
            >
              Tampilkan
            </button>
            <button
              class="btn btn-md btn-warning form-control"
              @click.prevent="goToPrint"
            >
              Cetak
            </button>
          </div>
        </div>
      </form>
    </template>
  </Card>
  <Table>
    <template v-slot:header>Preview Transaksi</template>
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
          <tr
            v-for="(transaction, index) in transactions"
            :key="transaction.id"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ setTime(transaction.tgl_pembayaran) }}</td>
            <td class="text-uppercase">
              {{ transaction.kode_pembayaran }}
            </td>
            <td class="p-0">
              <tr v-for="barang in transaction.barangs" :key="barang.id">
                <td class="text-capitalize py-1 px-1 border-0">
                  {{ barang.nama }}
                </td>
              </tr>
            </td>
            <td class="p-0">
              <tr v-for="barang in transaction.barangs" :key="barang.id">
                <td class="py-1 px-1 border-0">
                  x{{ barang.pembayaran_barang.jumlah_pembelian }}
                </td>
              </tr>
            </td>
            <td class="p-0">
              <tr v-for="barang in transaction.barangs" :key="barang.id">
                <td class="py-1 px-1 border-0">{{ barang.harga }}</td>
              </tr>
            </td>
            <td class="p-0">
              <tr v-for="barang in transaction.barangs" :key="barang.id">
                <td class="py-1 px-1 border-0">
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
  </Table>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card";
import Table from "@/components/Table.vue";
import Swal from "sweetalert2";
import moment from "moment";

export default {
  components: {
    Card,
    Table,
  },
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
          `http://localhost:8080/api/pembayaran/report?startDate=${this.startDate}&endDate=${this.endDate}`
        );

        if (res.data.length < 1) {
          Swal.fire({
            title: "Error!",
            text: "Data transaksi tidak ditemukan!",
            icon: "error",
            confirmButtonText: "Confirm",
          });
        }
        this.transactions = res.data;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    setTime(time) {
      return moment(time).locale("id").format("L");
    },
    goToPrint() {
      if (this.startDate === "" && this.endDate === "") {
        Swal.fire({
          title: "Error!",
          text: "Masukan tanggal transaksi!",
          icon: "error",
          confirmButtonText: "Confirm",
        });
      }

      let route = this.$router.resolve({
        name: "CetakReport",
        params: { start_date: this.startDate, end_date: this.endDate },
      });
      const struk = window.open(route.href, "", "status=0");
      struk.print();
    },
  },
  computed: {
    sumTransaction() {
      return this.transactions
        .map((item) => item.total_harga)
        .reduce((prev, curr) => prev + curr, 0);
    },
  },
};
</script>

<style scoped>
.action {
  gap: 8px;
}
</style>

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
            <td class="font-weight-bold">ID Transaksi</td>
            <td>8019129129931</td>
          </tr>
          <tr>
            <td class="font-weight-bold">Tanggal Transaksi</td>
            <td>24-12-2021</td>
          </tr>
          <tr>
            <td class="font-weight-bold">Total Transaksi</td>
            <td>Rp. 100.000</td>
          </tr>
          <tr>
            <td class="font-weight-bold">Daftar Belanja</td>
            <td>
              <table class="table table-bordered border-black">
                <thead>
                  <tr>
                    <th class="font-weight-bold">No</th>
                    <th class="font-weight-bold">Nama Barang</th>
                    <th class="font-weight-bold">Jumlah Beli</th>
                    <th class="font-weight-bold">Harga Satuan</th>
                    <th class="font-weight-bold">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Margarin</td>
                    <td>1</td>
                    <td>Rp. 10.000</td>
                    <td>Rp. 10.000</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Tepung Beras Rosebrand</td>
                    <td>4</td>
                    <td>Rp. 15.000</td>
                    <td>Rp. 60.000</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Fanta 1 Liter</td>
                    <td>2</td>
                    <td>Rp. 15.000</td>
                    <td>Rp. 30.000</td>
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
import Table from "@/components/Table.vue";
export default {
  components: { Table },
};
</script>

<style></style>

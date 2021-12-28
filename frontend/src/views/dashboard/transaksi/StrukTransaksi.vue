<template>
  <div class="container">
    <h3 class="text-dark text-center mt-5">Bukti Pembayaran</h3>
    <h5 class="text-dark text-center mt-3">== Mini Market Sentosa ==</h5>
    <p class="text-dark text-center mt-3">Jalan ABCD No.1 Denpasar</p>
    <div class="d-flex justify-content-center">
      <span v-for="x in 80">=</span>
    </div>
    <div class="row my-2 d-flex text-center justify-content-center content">
      <div class="col">No. Transaksi : 90182171821</div>
      <div class="col">Tanggal Transaksi : 24-12-2021</div>
    </div>
    <div class="d-flex justify-content-center">
      <span v-for="x in 80">=</span>
    </div>
    <div class="row my-2 d-flex justify-content-center text-center content">
      <table class="table table-borderless">
        <thead>
          <tr>
            <th class="font-weight-bold">Nama Barang</th>
            <th class="font-weight-bold">Jumlah Beli</th>
            <th class="font-weight-bold">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Margarin</td>
            <td>x1</td>
            <td>Rp. 10.000</td>
          </tr>
          <tr>
            <td>Margarin</td>
            <td>x1</td>
            <td>Rp. 10.000</td>
          </tr>
          <tr>
            <td>Margarin</td>
            <td>x1</td>
            <td>Rp. 10.000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex justify-content-center">
      <span v-for="x in 80">=</span>
    </div>
    <div class="row my-2 d-flex text-center justify-content-center content">
      <div class="col"><h4 class="font-weight-bold">Total Transaksi</h4></div>
      <div class="col"><h4 class="font-weight-bold">Rp. 350.000</h4></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  padding: 0 100px;
}
</style>

<template>
  <Form>
    <template v-slot:header>Tambah Transaksi</template>
    <template v-slot:content>
      <form>
        <div class="mb-3">
          <label for="kode" class="form-label">Kode Barang</label>
          <div class="row">
            <div class="col-11">
              <input type="text" class="form-control" id="kode" />
            </div>
            <div class="col-1">
              <a href="#" class="btn btn-md btn-primary"
                ><i class="fas fa-search"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="nama_barang" class="form-label">Nama Barang</label>
          <div class="row">
            <div class="col-10">
              <input
                type="text"
                class="form-control"
                id="nama_barang"
                disabled
              />
            </div>
            <div class="col-1">
              <input type="text" class="form-control" id="nama_barang" />
            </div>
            <div class="col-1">
              <button class="btn btn-md btn-danger">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="total" class="form-label">Total Harga</label>
          <input type="number" class="form-control" id="total" disabled />
        </div>
        <div class="mb-3">
          <label for="bayar" class="form-label">Bayar</label>
          <input type="number" class="form-control" id="Bayar" />
        </div>
        <div class="mb-3">
          <label for="kembalian" class="form-label">Kembalian</label>
          <input type="number" class="form-control" id="kembalian" disabled />
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary mr-3">
            Submit & Cetak Struk
          </button>
          <router-link to="#" class="btn btn-danger">Reset</router-link>
        </div>
      </form>
    </template>
  </Form>
  <Table class="mt-5">
    <template v-slot:header>Data Transaksi</template>
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
            <th>Nama Barang</th>
            <th>Jumlah</th>
            <th>Harga Satuan</th>
            <th>Total</th>
            <th>Bayar</th>
            <th>Kembalian</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>123456</td>
            <td>Detergen Cair</td>
            <td>2</td>
            <td>Rp.10.000</td>
            <td>Rp.20.000</td>
            <td>Rp.25.000</td>
            <td>Rp.30.000</td>
            <td>
              <router-link to="#" class="btn btn-sm btn-warning mr-2"
                >Cetak Struk</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </Table>
</template>

<script>
import Form from "@/components/Form.vue";
import Table from "../../../components/Table.vue";
export default {
  components: { Form, Table },
};
</script>

<style></style>

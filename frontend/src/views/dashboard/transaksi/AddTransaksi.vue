<template>
  <div class="row">
    <div class="col-12 col-lg-7">
      <Card>
        <template v-slot:header>Tambah Transaksi</template>
        <template v-slot:content>
          <div class="mb-3">
            <label for="kode" class="form-label">Kode Barang</label>
            <div class="row">
              <div class="col col-md-9 col-xl-10">
                <input
                  type="number"
                  class="form-control"
                  id="kode"
                  v-model="search"
                  @keyup.enter="searchBarang"
                />
              </div>
              <div class="col">
                <a href="#" @click="searchBarang" class="btn btn-md btn-primary"
                  ><i class="fas fa-search"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="nama_barang" class="form-label">Nama Barang</label>
            <input
              type="text"
              class="form-control"
              id="nama_barang"
              :value="barang.nama"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="stok" class="form-label">Stok Barang</label>
            <input
              type="number"
              class="form-control"
              id="stok"
              :value="barang.stok"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="harga" class="form-label">Harga Satuan</label>
            <input
              type="number"
              class="form-control"
              id="harga"
              :value="barang.harga"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="jumlah" class="form-label">Jumlah Beli</label>
            <input type="number" class="form-control" id="jumlah" />
          </div>
          <div class="mb-3">
            <a class="btn btn-primary mr-3">Tambah ke Keranjang</a>
          </div>
        </template>
      </Card>
    </div>
    <div class="col-12 col-lg-5">
      <Card>
        <template v-slot:header>Total Transaksi</template>
        <template v-slot:content>
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
        </template>
      </Card>
    </div>
  </div>

  <Table class="mt-1">
    <template v-slot:header>Keranjang Belanja</template>
    <template v-slot:addButton>
      <button class="btn btn-primary btn-md mb-3 mr-2" @click="goToPrint">
        Proses & Cetak Struk
      </button>
      <button class="btn btn-danger btn-md mb-3">Reset</button>
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
            <th>Kode Barang</th>
            <th>Nama Barang</th>
            <th>Jumlah Beli</th>
            <th>Harga Satuan</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>123456</td>
            <td>Detergen Cair</td>
            <td>
              <input
                type="number"
                value="2"
                class="form-control"
                style="width: 4vw"
              />
            </td>
            <td>Rp.10.000</td>
            <td>Rp.20.000</td>
            <td>
              <a class="btn btn-sm btn-danger mr-2">Hapus</a>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </Table>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";
import Table from "@/components/Table.vue";

export default {
  data() {
    return {
      search: "",
      barang: {},
    };
  },
  components: { Card, Table },
  methods: {
    searchBarang() {
      try {
        axios.get(`http://localhost:8080/api/barang/${this.search}`).then(
          (res) =>
            (this.barang = {
              kode_barang: res.data.kode_barang,
              nama: res.data.nama,
              stok: res.data.stok,
              harga: res.data.harga,
            })
        );
      } catch (error) {
        console.log(error);
      }
    },
    goToPrint() {
      let route = this.$router.resolve({ name: "StrukTransaksi" });
      const struk = window.open(route.href, "", "status=0");
      struk.print();
    },
  },
};
</script>

<style></style>

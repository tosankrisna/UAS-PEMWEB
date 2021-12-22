<template>
  <Form>
    <template v-slot:header>Edit Barang</template>
    <template v-slot:content>
      <form>
        <div class="mb-3">
          <label for="kode_barang" class="form-label">Kode Barang</label>
          <input
            type="number"
            class="form-control"
            id="kode_barang"
            name="kode_barang"
          />
        </div>
        <div class="mb-3">
          <label for="nama" class="form-label">Nama Barang</label>
          <input type="text" class="form-control" id="nama" />
        </div>
        <div class="mb-3">
          <label for="stok" class="form-label">Stok Barang</label>
          <input type="number" class="form-control" id="stok" name="stok" />
        </div>
        <div class="mb-3">
          <label for="harga" class="form-label">Harga Barang</label>
          <input type="number" class="form-control" id="harga" name="harga" />
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary mr-3">Submit</button>
          <router-link to="/" class="btn btn-danger">Batal</router-link>
        </div>
      </form>
    </template>
  </Form>
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  components: { Form },
};
</script>

<style></style>

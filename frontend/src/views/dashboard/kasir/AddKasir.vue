<template>
  <Form>
    <template v-slot:header>Tambah Kasir</template>
    <template v-slot:content>
      <form>
        <div class="mb-3">
          <label for="nip" class="form-label">No Induk Pegawai</label>
          <input type="number" class="form-control" id="nip" name="nip" />
        </div>
        <div class="mb-3">
          <label for="nama" class="form-label">Nama Lengkap</label>
          <input type="text" class="form-control" id="nama" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="text" class="form-control" id="password" />
        </div>
        <div class="mb-4">
          <label for="jenis_kelamin" class="form-label">Jenis Kelamin</label>
          <select
            class="form-select form-control"
            name="jenis_kelamin"
            aria-label="Default select example"
          >
            <option value="laki-laki">Laki-Laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="alamat" class="form-label">Alamat</label>
          <textarea class="form-control" id="alamat" />
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

<template>
  <Table>
    <template v-slot:header>Data Transaksi</template>
    <template v-slot:search>
      <Search />
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
            <th>Kode Transaksi</th>
            <th>Tanggal Transaksi</th>
            <th>Total Transaksi</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>8101929101</td>
            <td>24-12-2021</td>
            <td>Rp. 355.000</td>
            <td>
              <a class="btn btn-sm btn-warning mr-2">Detail</a>
              <a class="btn btn-sm btn-primary mr-2">Cetak Struk</a>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
    <template v-slot:pagination>
      <Pagination />
    </template>
  </Table>
</template>

<script>
import Table from "@/components/Table.vue";
import Search from "@/components/Search.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  components: { Table, Search, Pagination },
};
</script>

<style></style>

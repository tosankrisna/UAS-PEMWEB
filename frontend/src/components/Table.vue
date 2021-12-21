<template>
  <div class="container-fluid">
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-black">
          <slot name="header"></slot>
        </h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
              <div class="col-sm-12 col-md-3">
                <div id="dataTable_filter" class="dataTables_filter">
                  <input
                    type="search"
                    class="form-control form-control-md mb-3"
                    placeholder="Search data..."
                    aria-controls="dataTable"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-9 d-flex justify-content-end">
                <div id="dataTable_filter" class="dataTables_filter">
                  <router-link
                    :to="{ name: 'AddKasir' }"
                    class="btn btn-primary btn-md"
                    >Tambah Data</router-link
                  >
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <slot name="content"></slot>
              </div>
            </div>
            <div class="row">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
export default {
  components: { Pagination },
};
</script>

<style></style>

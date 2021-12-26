<template>
  <div class="container-fluid">
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
                <slot name="search"></slot>
              </div>
              <div class="col-sm-12 col-md-9 d-flex justify-content-end">
                <div id="dataTable_filter" class="dataTables_filter">
                  <slot name="addButton"></slot>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <slot name="content"></slot>
              </div>
            </div>
            <div class="row">
              <slot name="pagination"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style></style>

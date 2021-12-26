<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-10">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-black">
              <slot name="header"></slot>
            </h6>
          </div>
          <div class="card-body">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

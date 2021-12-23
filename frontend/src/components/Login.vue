<template>
  <div class="title text-center mb-4">
    <h2 class="text-dark">Login</h2>
  </div>
  <form>
    <div class="mb-3">
      <label for="nip" class="form-label">NIP</label>
      <input type="number" class="form-control" id="nip" />
    </div>
    <div class="mb-5">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" class="btn btn-md rounded-pill p-2 mb-5 btn-primary">
      Submit
    </button>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  width: 100%;
}
</style>

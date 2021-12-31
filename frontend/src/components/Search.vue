<template>
  <div id="dataTable_filter" class="dataTables_filter">
    <input
      type="search"
      class="form-control form-control-md mb-3"
      placeholder="Search data..."
      aria-controls="dataTable"
      v-model="search"
      @input="searchData"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchData() {
      this.$emit("search-data", this.search);
    },
  },
};
</script>

<style></style>

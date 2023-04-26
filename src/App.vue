<template>
  <nav class="navbar bg-dark">
    <span class="navbar-brand text-light "><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
  </nav>
    <form id="search">
        <label for="searchTerm">Search</label>
        <input type="text" id="searchTerm">
        <div id="results"></div>
    </form>
  <div class="container-fluid mt-3">
    <library-item-list></library-item-list>
  </div>
</template>

<script>
import LibraryItemList from "@/components/LibraryItemList.vue";

export default {
  name: 'App',
  components: {
    LibraryItemList,
  }
}
</script>

<style lang="scss">

</style>

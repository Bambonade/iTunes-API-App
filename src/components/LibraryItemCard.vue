<template>
  <div class="card h-100">
    <div class="card-body">
      <component :is="itemCardComponent(item)" :item="item" />
    </div>
    <div class="card-footer d-flex justify-content-end">
      <button v-if="item.isAvailable && item.checkOut && item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
      <button v-else-if="item.checkIn" class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
    </div>
  </div>
</template>

<script>

import MovieDetails from "@/components/MovieDetails.vue";
import BookDetails from "./BookDetails.vue";
import SongDetails from "@/components/SongDetails.vue";

export default {
  name: "LibraryItemCard",
  components: {BookDetails, MovieDetails, SongDetails},
  props: {
    item: {type: Object}
  },
  methods: {
    itemCardComponent(item){
      //return item.constructor.name + 'Card'; // will fail with webpack
      return item.constructor.type + 'Details';
    }
  },
}
</script>

<style scoped>

</style>
<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <div class="col" v-for="item in library" :key="item.name">
      <library-item-card :item="item"/>
    </div>
  </div>
</template>

<script>
import LibraryItemCard from "@/components/LibraryItemCard.vue";
import LibraryCollection from "@/models/LibraryCollection";
import {Book, Movie} from "@/models/Media";

// const searchTerm = $('#searchTerm').val();
// let endPoint = 'https://itunes.apple.com/search';
// let params = {
//     term: searchTerm,
//     filter: 'full',
//     limit: 36,
// }
//
// $.get(
//     endpoint,
//     params,
//     function (data) {
//         // this called in the future, when a response is retrieved
//         console.log('response,', data);
//
//         $('#results').html('');
//
//         data.results.forEach(result => {
//             if (result.kind) {
//                 $('#results').append(`<h3>${result.kind}</h3>`);
//             }
//             if (result.artistName) {
//                 $('#results').append(`<h3>${result.artistName}</h3>`);
//             }
//             if (result.collectionName) {
//                 $('#results').append(`<h3>${result.collectionName}</h3>`);
//             }
//             if (result.trackName) {
//                 $('#results').append(`<h3>${result.trackName}</h3>`);
//             }
//         });
//     },
//     'json'
// );

export default {
  name: "LibraryItemList",
  components: {LibraryItemCard},
  data() {
    return {
      library: new LibraryCollection()
          .addItem(new Book('1984', 237))
          .addItem(new Movie('Ready Player 1', 122))
          .addItem(new Movie('Avengers: End Game', 189))
    }
  },
}
</script>

<style scoped>

</style>
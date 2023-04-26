<template>
    <form id="search">
        <label for="searchTerm">Search</label>
        <input type="text" id="searchTerm">
        <div id="results"></div>
    </form>
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
//import axios from 'axios';

//let searchTerm = document.getElementById('#searchTerm').value;
export default {
    name: "LibraryItemList",
    components: {LibraryItemCard},
    props: {
        item: Object
    },

    data() {
        return {
            library: new LibraryCollection()
                .addItem(new Book('1984', 237))
                .addItem(new Movie('Ready Player 1', 122))
                .addItem(new Movie('Avengers: End Game', 189))
            // response: await axios.get('https://itunes.apple.com/search', {
            //     params: {
            //         term: searchTerm,
            //         filter: 'full',
            //         limit: 36,
            //     }
            // }),
        }
    },
};
</script>

<style scoped>

</style>
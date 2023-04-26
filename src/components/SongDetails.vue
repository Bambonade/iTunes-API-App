<template>
<div class="song">
    <h3 class="card-title"></h3>
    <img src="$({{item.thumbnail}})">
    <p class="card-text"></p>
</div>
</template>

<script>
import Song from '@/models/Song'

export default {
    name: 'SongDetails.vue',
    props:{
        item: {type:Song}
    }
}
</script>

<style scoped>

</style>
<template>
    <p>hello readers</p>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {setCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'

    @Component({})
    export default class SearchPage extends Vue{
        name: "SearchPage"
    }
</script>

<style scoped>

</style>
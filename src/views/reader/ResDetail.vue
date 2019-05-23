<template>
    <div>Hello!</div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {setCookie} from '../../assets/utils/cookie.ts'
    import axios from 'axios'

    @Component({})
    export default class ResDetail extends Vue{
        name: "ResDetail";

    }
</script>

<style scoped>

</style>
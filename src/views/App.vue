<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'

  @Component({})
  export default class App extends Vue {
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0;
        height: 100%;
    }

    body, html {
        margin: 0 0 0 0;
        height: 100%;
    }
</style>

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

    .header {
        height: 100%;
        padding: 9em 0 9em 0 ;
        background-color: #4686a0;
        color: rgba(255, 255, 255, 0.75);
        background-attachment: fixed,							fixed,							fixed;
        background-image: url("./login/img/overlay2.png"), url("./login/img/overlay3.svg"), linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
        background-position: top left,						center center,					center center;
        background-size: auto,							cover,							cover;
        overflow: hidden;
        position: relative;
        text-align: center;
    }

</style>

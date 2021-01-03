<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import "@clr/icons";
import "../public/general.scss";

export default class App extends Vue {}
</script>

<style scoped>
</style>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

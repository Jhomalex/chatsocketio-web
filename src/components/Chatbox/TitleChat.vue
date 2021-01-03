<template>
  <vs-row class="title-container" align="center">
    <div class="circulo" />
    <span class="name">Chat General</span>
    <span class="connectionCount">({{ connectionCount }} conectados)</span>
  </vs-row>
</template>

<script lang="ts">
import { Socket } from "socket.io-client";
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

const vxSocket = namespace("socket");

@Component
export default class TitleChat extends Vue {
  connectionCount = 0;
  @vxSocket.State("socket") socket!: Socket;
  created() {
    this.socket.on("connections", (data: number) => {
      this.connectionCount = data;
    });
  }
}
</script>

<style scoped>
.circulo {
  width: 10px;
  height: 10px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: #5cb85c;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
  margin-left: 20px;
}
.name {
  font-size: 20px;
  font-weight: 600;
}
.connectionCount {
  font-size: 14px;
  margin-left: 10px;
  color: darkgrey;
}

@media screen and (max-width: 600px) {
  .title-container {
    box-shadow: 0 10px 10px -6px rgb(216, 216, 216);
    height: 60px;
    position: fixed;
    top: 0;
    width: 58.1% !important;
    z-index: 2 !important;
    background: #ffffff;
  }
}

@media screen and (max-width: 900px) and (min-width: 600px) {
  .title-container {
    box-shadow: 0 10px 10px -6px rgb(216, 216, 216);
    height: 60px;
    position: fixed;
    top: 0;
    width: 66.4% !important;
    z-index: 2 !important;
    background: #ffffff;
  }
}

@media screen and (min-width: 900px) {
  .title-container {
    box-shadow: 0 10px 10px -6px rgb(216, 216, 216);
    height: 60px;
    position: fixed;
    top: 0;
    width: 83.4% !important;
    z-index: 2 !important;
    background: #ffffff;
  }
}
</style>
<template>
  <vs-row>
    <vs-col lg="2" sm="4" xs="5">
      <contact-list />
    </vs-col>
    <vs-col
      vs-type="flex"
      vs-justify="center"
      vs-align="center"
      lg="10"
      sm="8"
      xs="7"
    >
      <chatbox />
    </vs-col>
    <JoinForm />
  </vs-row>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Sidebar from "@/components/Sidebar/index.vue";
import Chatbox from "@/components/Chatbox/index.vue";
import ContactList from "@/components/ContactList/index.vue";
import { io, Socket } from "socket.io-client";
import { namespace } from "vuex-class";
import JoinForm from "@/components/JoinForm/index.vue";

const socket = io("http://localhost:3000");
const vxSocket = namespace("socket");

@Component({ components: { Sidebar, Chatbox, ContactList, JoinForm } })
export default class Home extends Vue {
  @vxSocket.Mutation("setSocket") setSocket!: (socket: Socket) => void;
  created() {
    this.setSocket(socket);
  }
}
</script>

<style lang="scss">
</style>

<template>
  <vs-row class="container-contact-list" justify="center">
    <vs-col>
      <h2 class="text-titlecontactlist">Conectados</h2>
      <vs-input
        placeholder="Buscar contactos"
        primary
        class="search-input"
        v-model="usernameInput"
      >
        <template #icon>
          <i class="fas fa-search"></i>
        </template>
      </vs-input>
      <div
        style="margin-top: 10px"
        v-for="(username, key) in usernameListShow"
        :key="key"
      >
        <contact-item :username="username" />
      </div>
    </vs-col>
  </vs-row>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ContactItem from "@/components/ContactList/ContactItem.vue";
import { namespace } from "vuex-class";
import { Socket } from "socket.io-client";

const vxSocket = namespace("socket");
const vxAuth = namespace("auth");

@Component({ components: { ContactItem } })
export default class ContactList extends Vue {
  usernameList: Array<string> = [];
  usernameInput = "";
  usernameListShow: Array<string> = [];

  @vxSocket.State("socket") socket!: Socket;
  @vxAuth.State("username") username!: string;

  @Watch("usernameList")
  OnusernameListChange() {
    this.usernameListShow = this.usernameList;
    this.usernameInput = "";
  }
  @Watch("usernameInput")
  OnusernameInputChange() {
    this.sortUsername();
  }

  created() {
    this.socket.on("joinGeneral", (data: Array<string>) => {
      this.usernameList = data;
    });

    window.onbeforeunload = () => {
      this.socket.emit("disconnectGeneral", this.username);
    };

    this.socket.on("disconnectGeneral", (data: Array<string>) => {
      this.usernameList = data;
    });
  }
  sortUsername() {
    if (this.usernameInput != "") {
      this.usernameListShow = this.usernameList.filter((u: string) => {
        return u.toLowerCase().indexOf(this.usernameInput.toLowerCase()) > -1;
      });
    } else {
      this.usernameListShow = this.usernameList;
    }
  }
}
</script>

<style lang="scss">
.text-titlecontactlist {
  text-align: left;
  color: #ffffff;
  padding-left: 10px;
}

@media screen and (max-width: 600px) {
  .container-contact-list {
    background: #0e7aef;
    height: 100% !important;
    position: fixed !important;
    top: 0;
    left: 0;
    width: 41.5% !important;
    border-radius: 0px 25px 25px 0px;
  }
}

@media screen and (max-width: 900px) and (min-width: 600px) {
  .container-contact-list {
    background: #0e7aef;
    height: 100% !important;
    position: fixed !important;
    top: 0;
    left: 0;
    width: 33.33% !important;
    border-radius: 0px 25px 25px 0px;
  }
}

@media screen and (min-width: 900px) {
  .container-contact-list {
    background: #0e7aef;
    height: 100% !important;
    position: fixed !important;
    top: 0;
    left: 0;
    width: 16.67% !important;
    border-radius: 0px 25px 25px 0px;
  }
}

.search-input {
  width: 90%;
  padding-left: 10px;
  .vs-input {
    width: 100% !important;
  }
}
</style>
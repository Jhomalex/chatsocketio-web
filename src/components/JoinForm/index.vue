<template>
  <vs-dialog :loading="loading" v-model="active" not-close prevent-close>
    <template #header>
      <h3>Únete para chatear</h3>
    </template>
    <div>
      <vs-input
        v-model="username"
        placeholder="Usuario"
        class="joinform-input"
        @keypress.enter="join()"
      >
        <template #icon>
          <i class="fas fa-user-ninja"></i>
        </template>
      </vs-input>
    </div>

    <template #footer>
      <div>
        <vs-button block @click="join()"> ¡Unirme ahora! </vs-button>
      </div>
    </template>
  </vs-dialog>
</template>

<script lang="ts">
import { Socket } from "socket.io-client";
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

const vxAuth = namespace("auth");
const vxSocket = namespace("socket");

@Component
export default class JoinForm extends Vue {
  username = "";
  loading = false;

  @vxAuth.Mutation("setUsername") setUsername!: (username: string) => void;
  @vxAuth.Getter("isJoined") isJoined!: boolean;
  @vxSocket.State("socket") socket!: Socket;

  get active() {
    return !this.isJoined;
  }

  join() {
    this.setUsername(this.username);
    this.socket.emit("joinGeneral", this.username);
  }
}
</script>

<style lang="scss">
.joinform-input {
  width: 100%;
  margin-top: 10px;
  .vs-input {
    width: 100% !important;
  }
}
</style>
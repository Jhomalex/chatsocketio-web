<template>
  <vs-row class="container-textbox" align="center">
    <vs-col xs="10" sm="10" lg="11">
      <vs-input
        primary
        v-model="message"
        @keydown="keyPressed()"
        placeholder="Escribe tu mensaje aquí"
        class="chat-input"
        @keypress.enter="sendMessage()"
      />
    </vs-col>
    <vs-col xs="2" sm="2" lg="1">
      <vs-button
        gradient
        style="min-width: 80%"
        warn
        animation-type="scale"
        color="primary"
        @click="sendMessage()"
      >
        <i class="far fa-paper-plane"></i>
        <template #animate> Enviar </template>
      </vs-button>
    </vs-col>
    <vs-col w="12" style="height: 16px">
      <span class="text-istyping" v-show="isTyping"
        >{{ usernameTyping }} está escribiendo...</span
      >
    </vs-col>
  </vs-row>
</template>

<script lang="ts">
import { ChatMessageGeneral } from "@/interfaces";
import { Socket } from "socket.io-client";
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { zfill } from "@/util/helpers";

const vxSocket = namespace("socket");
const vxAuth = namespace("auth");
const vxMessage = namespace("message");

@Component
export default class TextBox extends Vue {
  message = "";
  isTyping = false;
  usernameTyping = "";
  timeout = {} as any;
  months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  @vxSocket.State("socket") socket!: Socket;
  @vxAuth.State("username") username!: string;
  @vxMessage.Mutation("setChatGeneral") setChatGeneral!: (
    chatGeneral: ChatMessageGeneral
  ) => void;

  // @Watch("message")
  // onmessageChange(value: string) {
  //   value ? this.emitIsTyping(true) : this.emitIsTyping(false);
  // }

  created() {
    this.socket.on("isTypingGeneral", (username: string) => {
      this.isTyping = true;
      this.usernameTyping = username;
    });
    this.socket.on("stopTypingGeneral", () => {
      this.isTyping = false;
    });
  }

  keyPressed() {
    this.emitIsTyping(this.username);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.emitStopTyping();
    }, 1000);
  }

  emitIsTyping(username: string) {
    this.socket.emit("isTypingGeneral", username);
  }
  emitStopTyping() {
    this.socket.emit("stopTypingGeneral");
  }
  emitSendChatMessageGeneral() {
    this.socket.emit("chatMessageGeneral", {
      message: this.message,
      username: this.username,
      time: this.formatDate(new Date()),
    });
  }

  sendMessage() {
    this.emitSendChatMessageGeneral();
    this.setChatGeneral({
      message: this.message,
      username: this.username,
      time: this.formatDate(new Date()),
      isOwn: true,
    });
    this.message = "";
  }

  formatDate(d: Date) {
    const year = d.getFullYear();
    const day = d.getDate();
    const month = this.months[d.getMonth()];
    const dayName = this.days[d.getDay()];
    const hour = zfill(d.getHours(), 2);
    const minute = zfill(d.getMinutes(), 2);
    return `${dayName}, ${day} de ${month} del ${year} a las ${hour}:${minute}`;
  }
}
</script>

<style lang="scss">
.chat-input {
  width: 100%;
  .vs-input {
    width: 100% !important;
  }
}
.container-textbox {
  height: 60px;
  width: 83.4% !important;
  bottom: 0px !important;
  position: fixed !important;
  background: #ffffff;
  z-index: 2;
}
.text-istyping {
  color: rgb(138, 144, 164);
  font-size: 14px;
  text-align: center !important;
  text-justify: auto;
  margin: auto;
}

@media screen and (max-width: 600px) {
  .container-textbox {
    height: 60px;
    width: 58.1% !important;
    bottom: 0px !important;
    position: fixed !important;
    background: #ffffff;
    z-index: 2;
  }
}

@media screen and (max-width: 900px) and (min-width: 600px) {
  .container-textbox {
    height: 60px;
    width: 66.4% !important;
    bottom: 0px !important;
    position: fixed !important;
    background: #ffffff;
    z-index: 2;
  }
}

@media screen and (min-width: 900px) {
  .container-textbox {
    height: 60px;
    width: 83.4% !important;
    bottom: 0px !important;
    position: fixed !important;
    background: #ffffff;
    z-index: 2;
  }
}
</style>
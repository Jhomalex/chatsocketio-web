<template>
  <div>
    <div v-for="(chat, key) in chatList" :key="key">
      <card-message-received
        v-if="!chat.isOwn"
        :message="chat.message"
        :time="chat.time"
        :username="chat.username"
      />
      <card-message-sent
        v-if="chat.isOwn"
        :message="chat.message"
        :time="chat.time"
        :username="chat.username"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import CardMessageSent from "@/components/Chatbox/Messagesbox/CardMessageSent.vue";
import CardMessageReceived from "@/components/Chatbox/Messagesbox/CardMessageReceived.vue";
import { namespace } from "vuex-class";
import { Socket } from "socket.io-client";
import { ChatMessageGeneralReq, ChatMessageGeneral } from "@/interfaces/index";

const vxSocket = namespace("socket");
const vxMessage = namespace("message");

@Component({ components: { CardMessageSent, CardMessageReceived } })
export default class MessageBox extends Vue {
  chatList: Array<ChatMessageGeneral> = [];

  @vxSocket.State("socket") socket!: Socket;
  @vxMessage.State("chatGeneral") chatGeneral!: ChatMessageGeneral;

  @Watch("chatGeneral")
  onchatGeneralChange(value: ChatMessageGeneral) {
    this.chatList.push(value);
  }

  created() {
    this.socket.on("chatMessageGeneral", (data: ChatMessageGeneralReq) => {
      this.chatList.push({ ...data, isOwn: false });
    });
  }
}
</script>

<style scoped>
</style>
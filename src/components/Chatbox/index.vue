<template>
  <vs-row style="background: #ffffff">
    <vs-col>
      <title-chat />
    </vs-col>
    <vs-col class="container-messagesbox">
      <messagesbox />
    </vs-col>
    <vs-col>
      <text-box />
    </vs-col>
  </vs-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TextBox from "@/components/Chatbox/TextBox.vue";
import TitleChat from "@/components/Chatbox/TitleChat.vue";
import Messagesbox from "@/components/Chatbox/Messagesbox/index.vue";

@Component({ components: { TitleChat, TextBox, Messagesbox } })
export default class Chatbox extends Vue {}
</script>

<style lang="scss">
.container-messagesbox {
  margin-top: 80px;
  margin-bottom: 60px;
  margin-left: 20px;
}
</style>
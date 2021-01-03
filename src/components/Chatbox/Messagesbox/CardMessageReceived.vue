<template>
  <vs-row align="flex-end" style="margin-top: 5px">
    <vs-avatar circle size="25" class="avatar">
      <vs-tooltip>
        <img src="@/assets/avatar.png" />
        <template #tooltip> {{ username }} </template>
      </vs-tooltip>
    </vs-avatar>
    <vs-col w="7" style="text-align: start" class="message-box">
      <span class="text-message" v-text="message" />
      <br />
      <p class="text-send-date" v-text="time" />
    </vs-col>
  </vs-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CardMessageReceived extends Vue {
  @Prop() message!: string;
  @Prop() time!: string;
  @Prop() username!: string;
}
</script>

<style lang="scss" scoped>
.message-box {
  background: #eaeaea;
  border-radius: 20px;
  padding: 15px;
}
.message-box:hover {
  background: #e4e4e4;
}
.avatar {
  margin-right: 10px;
}
.text-message {
  font-size: 15px;
}
.text-send-date {
  font-size: 12.5px;
  font-weight: 600;
  text-align: end !important;
  color: #767676;
  margin: 10px 0px 0px 0px;
}
</style>
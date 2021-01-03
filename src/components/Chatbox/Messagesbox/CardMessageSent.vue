<template>
  <vs-row align="flex-end" justify="flex-end" style="margin-top: 5px">
    <vs-col w="7" style="text-align: start" class="message-box">
      <span class="text-message" v-text="message" />
      <br />
      <p class="text-send-date" v-text="time" />
    </vs-col>
    <vs-avatar circle size="25" class="avatar">
      <vs-tooltip>
        <img src="@/assets/avatar.png" />
        <template #tooltip> {{ username }} </template>
      </vs-tooltip>
    </vs-avatar>
  </vs-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CardMessageSent extends Vue {
  @Prop() message!: string;
  @Prop() time!: string;
  @Prop() username!: string;
}
</script>

<style lang="scss" scoped>
.message-box {
  background: #0e7aef;
  border-radius: 20px;
  padding: 15px;
}
.message-box:hover {
  background: #0e74e2;
}
.avatar {
  margin-right: 10px;
}
.text-message {
  color: #ffffff;
  font-size: 15px;
}
.text-send-date {
  font-size: 12.5px;
  font-weight: 600;
  text-align: end !important;
  color: #ffffff;
  margin: 10px 0px 0px 0px;
}
</style>
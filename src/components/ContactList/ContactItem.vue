<template>
  <vs-row align="center" class="box-contactitem">
    <vs-avatar circle size="25" class="avatar-contactitem">
      <img
        src="@/assets/avatar.png"
      />
    </vs-avatar>
    <vs-col w="10" style="text-align: start" class="message-box">
      <span class="text-name" v-text="username" />
    </vs-col>
  </vs-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ContactItem extends Vue {
  @Prop() username!: string;
}
</script>

<style scoped lang="scss">
.avatar-contactitem {
  margin-left: 10px;
}
.text-name {
  color: #ffffff;
  font-weight: 600;
  margin-left: 10px;
  font-size: 14px;
}
.box-contactitem {
  height: 50px;
}
.box-contactitem:hover {
  background: rgb(37, 136, 241);
  cursor: pointer;
}
.box-contactitem-selected {
  background: #3596ff;
}
</style>
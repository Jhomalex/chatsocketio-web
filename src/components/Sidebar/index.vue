<template>
  <div class="hidden">
    <vs-sidebar absolute open>
      <template #logo>
        <!-- ...img logo -->
      </template>
      <vs-sidebar-item
        id="person"
        v-for="(x, i) in 3"
        :key="i"
        style="padding-bottom: 10px"
      >
        <template #icon>
          <vs-avatar>
            <img
              src="@/assets/avatar.png"
              alt=""
            />
          </vs-avatar>
        </template>
        Jhonatan Malara
      </vs-sidebar-item>
    </vs-sidebar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Sidebar extends Vue {}
</script>

<style scoped>
</style>
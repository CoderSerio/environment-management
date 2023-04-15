<script lang="ts" setup>
import ATaskOrder from "@/pages/common/ATaskOrder/index.vue"
import { USER_LEVEL,useUserStore } from '@/stores';
import { relative } from "path";
import { ref } from "vue";
const userStore = useUserStore()

const isA = userStore.user.level===USER_LEVEL.A?true:false
</script>

<template>
  <div>
    <ATaskOrder v-show="isA" />
  </div>
</template>

<style scoped>

</style>
<script lang="ts" setup>
import { USER_LEVEL } from '@/type'
import { useUserStore } from '@/stores';
import ProcessTable from './components/process-table/index.vue'
import HistoryViewTable from './components/history-view-table/index.vue'

const userStore = useUserStore()
const isA = userStore.user.level === USER_LEVEL.RIGHT_CONTROL_READ_HEIGHT
const isB = userStore.user.level === USER_LEVEL.RIGHT_CONTROL_READ_MID
</script>

<template>
  <template v-if="isA || isB">
    <ProcessTable></ProcessTable>
  </template>
  <template v-else>
    <HistoryViewTable></HistoryViewTable>
  </template>
</template>

<style scoped></style>
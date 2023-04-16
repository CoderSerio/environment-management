<script lang="ts" setup>
import ProcessTable from './components/process-table/index.vue'
import HistoryViewTable from './components/history-view-table/index.vue'
</script>

<template>
  这是A、B用户查看进度：
  <ProcessTable></ProcessTable>
  这是C用户查看自己的历史操作记录：
  <HistoryViewTable></HistoryViewTable>
</template>

<style scoped></style>
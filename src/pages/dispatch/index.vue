<script lang="ts" setup>
import ContaminantTable from './components/contaminant-table/index.vue'
import EnvQualityTable from './components/env-quality-table/index.vue'
import TaskOrderTable from './components/task-order-table/index.vue'

import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('1')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <h3>任务文件列表</h3>
  <TaskOrderTable />

  <h3 style="margin-top: 32px;">任务下发</h3>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="污染物任务" name="1">
      <ContaminantTable />
    </el-tab-pane>
    <el-tab-pane label="环境质量监测任务" name="2">
      <EnvQualityTable />
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>
  h3 {
    text-align: left;  
  }
</style>
<script lang="ts" setup>
import ContaminantTable from './components/contaminant-table/index.vue'
import EnvQualityTable from './components/env-quality-table/index.vue'
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('1')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="污染物任务" name="1">
      <ContaminantTable />
    </el-tab-pane>
    <el-tab-pane label="环境质量监测任务" name="2">
      <EnvQualityTable />
    </el-tab-pane>
  </el-tabs>
</template>

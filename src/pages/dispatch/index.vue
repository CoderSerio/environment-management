<script lang="ts" setup>
import ContaminantTable from './components/contaminant-table/index.vue'
import EnvQualityTable from './components/env-quality-table/index.vue'
import TaskOrderTable from './components/task-order-table/index.vue'
import { TABLE_NAME } from './type'
import { USER_LEVEL } from '@/type'
import type { TabsPaneContext } from 'element-plus'
import ATaskOrder from "@/pages/common/ATaskOrder/index.vue"
import { useUserStore } from '@/stores';
import { relative } from "path";
import { ref } from "vue";
const userStore = useUserStore()
const activeTabName = ref(TABLE_NAME.CONTAMINANT)
const isA = userStore.user.level === USER_LEVEL.RIGHT_CONTROL_READ_HIEGHT ? true : false
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <div>
    <div>备注：A用户显示下述内容</div>
    <ATaskOrder v-show="isA" />
  </div>
  <div>备注：B用户显示下述内容</div>
  <h3>任务文件列表</h3>
  <TaskOrderTable />

  <h3 style="margin-top: 32px;">任务下发</h3>
  <el-tabs v-model="activeTabName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="污染物任务" :name="TABLE_NAME.CONTAMINANT">
      <ContaminantTable />
    </el-tab-pane>
    <el-tab-pane label="环境质量监测任务" :name="TABLE_NAME.ENV_QUALITY">
      <EnvQualityTable />
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>
h3 {
  text-align: left;
}
</style>
<script lang="ts" setup>
import ContaminantTable from './components/contaminant-table/index.vue'
import EnvQualityTable from './components/env-quality-table/index.vue'
import TaskOrderTable from './components/task-order-table/index.vue'
import { TABLE_NAME } from './type'
import { USER_LEVEL } from '@/type'
import type { TabsPaneContext } from 'element-plus'
import ATaskOrder from "@/pages/common/ATaskOrder/index.vue"
import { useUserStore } from '@/stores';
import { onMounted, reactive, ref } from "vue";
import { getFileList, getTaskList } from '@/apis/level-b'
import { Task, TaskFile } from '@/types'
const activeTabName = ref(TABLE_NAME.CONTAMINANT)

const userStore = useUserStore()
const isA = userStore.user.level === USER_LEVEL.RIGHT_CONTROL_READ_HEIGHT
const isB = userStore.user.level === USER_LEVEL.RIGHT_CONTROL_READ_MID

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const data: { fileListTableData: Array<TaskFile>, fileIds: Array<string>, taskListTableData: Array<Task> } = reactive({
  fileListTableData: [],
  fileIds: [],
  taskListTableData: []
})

const refreshTableData = async () => {
  const files = await getFileList()
  data.fileListTableData = [...files.data?.list]
  data.fileIds = files.data?.list?.map((item: TaskFile) => {
    return item?.fileId
  })
  const tasks = await getTaskList()
  data.taskListTableData = tasks.data?.list.map((item: Task) => { return Object.assign(item?.data, { type: item?.type }) })
}


onMounted(() => {
  refreshTableData()
})

</script>

<template>
  <template v-if="isA">
    <ATaskOrder v-show="isA" :tableData="data.fileListTableData" />
  </template>
  <template v-else-if="isB">
    <h3>任务文件列表</h3>
    <TaskOrderTable :tableData="data.fileListTableData" />
    <h3 style="margin-top: 32px;">任务下发</h3>
    <el-tabs v-model="activeTabName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="污染物任务" :name="TABLE_NAME.CONTAMINANT">
        <ContaminantTable :fileIds="data.fileIds"
          :tableData="data.taskListTableData.filter((item) => item?.type == TABLE_NAME.CONTAMINANT)"
          :refreshData="refreshTableData" />
      </el-tab-pane>
      <el-tab-pane label="环境质量监测任务" :name="TABLE_NAME.ENV_QUALITY">
        <EnvQualityTable :fileIds="data.fileIds"
          :tableData="data.taskListTableData.filter((item) => item?.type == TABLE_NAME.ENV_QUALITY)"
          :refreshData="refreshTableData" />
      </el-tab-pane>
    </el-tabs>
  </template>
</template>

<style scoped>
h3 {
  text-align: left;
}
</style>
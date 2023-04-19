<script lang="ts" setup>
import { getTaskList, submitTask } from '@/apis/level-c';
import { Task } from '@/types';
import { ElButton, ElMessage } from 'element-plus';
import { ref, onMounted, reactive } from 'vue'


const dialogTableVisible = ref(false)


const handleSubmit = async (row: Task) => {
  await submitTask({ taskId: row.taskId })
  ElMessage({
    type: "success",
    message: `提交审核成功！`,
  });
  refreshData()
}
const data: { tableData: Array<Task>, modalData: Array<Task> } = reactive({
  tableData: [],
  modalData: []
})

const refreshData = async () => {
  const res = await getTaskList()
  data.tableData = [...res.data?.list]
  data.modalData = data.tableData?.map(item => ({ ...item.data as unknown as Task, from: item.from }))
}

onMounted(() => {
  refreshData()
})

</script>

<template>
  <el-table :data="data.tableData" border style="width: 100%;">
    <el-table-column prop="taskId" label="点位名称" />
    <el-table-column prop="fileId" label="项目" />
    <el-table-column prop="id" label="任务明细">
      <template v-slot="scope">
        <div style="display: flex; gap: 10px; justify-content: flex-start;">
          <el-button @click="dialogTableVisible = !dialogTableVisible">查看</el-button>
          <el-button @change="handleSubmit">上传文件</el-button>
          <el-button v-if="![5, 4].includes(scope.row.status)" type="primary" @click="handleSubmit(scope.row)">
            确认提交
          </el-button>
        </div>
      </template>

    </el-table-column>
    <el-table-column prop="Task_Completion" label="任务完成度">
      <template #default="scope">
        {{ (100 * (+scope.row.currentTimes || 0) / (+scope.row.data?.frequency || 1)).toFixed(0) }}%
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-model="dialogTableVisible">
    <el-table :data="data.tableData" border style="width: 100%">
      <el-table-column property="district" label="市州行政区" min-width="14%" align="center" />
      <el-table-column property="class" label="类别" min-width="8%" align="center" />
      <el-table-column property="undertakenOrganization" label="承担单位" min-width="14%" align="center" />
      <el-table-column property="frequency" label="频次" min-width="8%" align="center" />
      <el-table-column property="from" label="任务下达来源" min-width="18%" align="center" />
      <el-table-column property="from" label="任务下达人" min-width="18%" align="center" />
      <el-table-column property="time" label="任务下达时间" min-width="18%" align="center" />
    </el-table>
  </el-dialog>
</template>

<style scoped>
.row {
  color: black;
  background-color: aliceblue !important;
}

.header {
  color: white;
  background-color: royalblue !important;
}


.check {
  background-color: royalblue !important;
  color: white;
}

.el-button {
  display: block;
  margin: 0 auto;
}
</style>

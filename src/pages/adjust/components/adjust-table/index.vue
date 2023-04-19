<script lang="ts" setup>
import { getTaskList } from "@/apis/level-b";
import { submitTask } from "@/apis/level-c";
import { Task } from "@/types";
import { ElMessage } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import { gridData, cities, columns } from './config'
const dialogTableVisible = ref(false);

const value = ref("");
const activeTaskId = ref("")
const data = reactive<{ tableData: Array<Task> }>({
  tableData: []
})


const handlePreview = (taskId: string) => {
  dialogTableVisible.value = true
  activeTaskId.value = taskId
}


const refreshData = async () => {
  const res = await getTaskList()
  data.tableData = res.data?.list?.filter((item: Task) => [4, 3].includes(item?.status))
}

// 审核，1-通过 0-驳回
const handleAdjust = (adjustRes: number) => {
  submitTask({ taskId: activeTaskId.value, adjustRes })
  refreshData()
  ElMessage.success("审核提交成功");
  dialogTableVisible.value = false
}

onMounted(() => {
  refreshData()
})

</script>

<template>
  <el-row :gutter="20">
    <el-col :span="5">
      <el-select v-model="value" filterable placeholder="全部/待审核/通过/打回">
        <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: var(--el-text-color-secondary); font-size: 13px">
            {{ item.value }}
          </span>
        </el-option>
      </el-select>
    </el-col>
  </el-row>

  <el-table :data="data.tableData" style="width: 100%">
    <el-table-column v-for="column in columns" :prop="column.prop" :label="column.label" />
    <el-table-column label="操作">
      <template #header>操作</template>
      <template #default="scope">
        <el-button text @click="handlePreview(scope.row.taskId)">
          查看
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="dialogTableVisible">
    <div class="header">
      <span>审核时间: 2023-03-09</span>
      <span>审核人员: 456B</span>
    </div>
    <el-table :data="gridData">
      <el-table-column property="category" label="类目" />
      <el-table-column property="elename" label="数据名称" />
      <el-table-column property="cotent" label="含量" />
      <el-table-column property="threshold" label="阈值" />

      <el-table-column property="result" label="评价结果">
        <template #default="scope">
          <el-checkbox label="通过" />
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <el-button type="primary" @click="handleAdjust(1)">审核通过 </el-button>
      <el-button type="danger" @click="handleAdjust(0)">审核驳回</el-button>
    </div>
  </el-dialog>
</template>

<style scoped>
.header {
  text-align: right;
}

.header>span {
  margin: 4px 6px;
}

.footer {
  margin: 16px 0 0 0;
}
</style>

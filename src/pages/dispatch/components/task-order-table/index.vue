<script lang="ts" setup>
import { getFileList } from "@/apis/level-b";
import { TaskFile } from "@/types";
import { onMounted, reactive } from "vue";
import { MOCK_DATA, columns } from "./config";

const handleEdit = (index: number, row: TaskFile) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: TaskFile) => {
  console.log(index, row);
};

const { tableData } = defineProps<{ tableData: Array<TaskFile> }>()

const handlePreview = (index: number, row: TaskFile) => {
  alert(`临时弹窗：${row?.data?.title}`)
};


</script>

<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column v-for="column in columns" :label="column.label" :prop="column.prop">
      <template #default="scope">
        {{ column.render ? column.render(scope.row[column.prop]) : scope.row[column.prop] }}
      </template>
    </el-table-column>

    <el-table-column label="Operations" width="200">
      <template #header>操作</template>
      <template #default="scope">
        <el-button size="small" @click="handlePreview(scope.$index, scope.row)">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>
.operations {
  display: flex;
  justify-content: flex-end;
}
</style>
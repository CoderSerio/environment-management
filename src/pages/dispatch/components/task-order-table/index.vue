<script lang="ts" setup>
import { MOCK_DATA, columns, TaskOrderTableColumns } from "./config";

const handleEdit = (index: number, row: TaskOrderTableColumns) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: TaskOrderTableColumns) => {
  console.log(index, row);
};

</script>

<template>
  <el-table :data="MOCK_DATA" style="width: 100%">
    <el-table-column v-for="column in columns" :label="column.label" :prop="column.prop">
      <template #default="scope">
        {{ scope.row[column.prop] }}
      </template>
    </el-table-column>

    <el-table-column label="Operations" width="200">
      <template #header>操作</template>
      <template #default="scope">
        <el-button size="small" @click="handleDelete(scope.$index, scope.row)">查看</el-button>
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
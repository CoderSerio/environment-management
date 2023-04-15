<script lang="ts" setup>
import { reactive, ref } from "vue";
import { MOCK_DATA, columns, EnvQualityTableColumns } from "./config";
import ModalForm from '../modal-form/index.vue'
import TaskEditForm from '../modal-form/task-edit-form.vue'
import { TABLE_NAME } from "../../type";

const handleDispatch = (index: number, row: EnvQualityTableColumns) => {
  console.log(index, row);
};
const handleEdit = (index: number, row: EnvQualityTableColumns) => {
  console.log(index, row);
  modalFormProps.isVisible = true
  // TODO: 自动回填数据
};
const handleDelete = (index: number, row: EnvQualityTableColumns) => {
  console.log(index, row);
};

const modalFormProps = reactive({
  isVisible: false,
  title: '新建任务'
})

const taskEditFormProps = reactive({
  tableName: TABLE_NAME.ENV_QUALITY
})
</script>

<template>
  <div class="header">
    <el-button type="primary" @click="modalFormProps.isVisible = true">新建任务</el-button>
  </div>

  <ModalForm :modalFormProps="modalFormProps">
    <TaskEditForm :taskEditFormProps="taskEditFormProps" />
  </ModalForm>

  <el-table :data="MOCK_DATA" style="width: 100%">
    <el-table-column v-for="column in columns" :label="column.label" :prop="column.prop">
      <template #default="scope">
        {{ scope.row[column.prop] }}
      </template>
    </el-table-column>

    <el-table-column label="Operations" width="200">
      <template #header>操作</template>
      <template #default="scope">
        <el-button size="small" @click="handleDispatch(scope.$index, scope.row)">下发</el-button>
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
}
</style>
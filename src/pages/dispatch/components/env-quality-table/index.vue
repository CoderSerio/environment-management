<script lang="ts" setup>
import { reactive } from "vue";
import { MOCK_DATA, columns, EnvQualityTableColumns } from "./config";
import ModalForm from '../modal-form/index.vue'
import TaskEditForm from '../modal-form/task-edit-form.vue'
import { TABLE_NAME } from "../../type";

// 当前组件自身需要的数据
const data = reactive({
  tableData: [...MOCK_DATA]
})

// 弹窗组件需要的参数
const modalFormProps = reactive({
  isVisible: false,
  title: '新建任务'
})

// 编辑表单所需要的参数
const taskEditFormProps = reactive({
  tableName: TABLE_NAME.ENV_QUALITY,
  tableData: data.tableData,
  index: 0,
  defaultFormData: {},
  close: () => modalFormProps.isVisible = false
})


const handleDispatch = (index: number, row: EnvQualityTableColumns) => {
  console.log(index, row);
};
const handleAdd = () => {
  modalFormProps.isVisible = true
  taskEditFormProps.defaultFormData = {}
}
const handleEdit = (index: number, row: EnvQualityTableColumns) => {
  modalFormProps.isVisible = true
  taskEditFormProps.defaultFormData = { ...row }
  taskEditFormProps.index = index
};
const handleDelete = (index: number, row: EnvQualityTableColumns) => {
  data.tableData.splice(index, 1)
};
</script>

<template>
  <div class="header">
    <el-button type="primary" @click="handleAdd">新建任务</el-button>
  </div>

  <ModalForm :modalFormProps="modalFormProps">
    <TaskEditForm :taskEditFormProps="taskEditFormProps" />
  </ModalForm>

  <el-table :data="data.tableData" style="width: 100%">
    <el-table-column v-for="column in columns" :label="column.label" :prop="column.prop">
      <template #default="scope">
        {{ column?.render ? column.render(scope.row[column.prop]) : scope.row[column.prop] }}
      </template>
    </el-table-column>

    <el-table-column label="操作" width="200">
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
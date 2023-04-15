<script lang="ts" setup>
import { reactive } from "vue";
import { MOCK_DATA, columns, ContaminantTableColumns } from "./config";
import ModalForm from '../modal-form/index.vue'
import { TABLE_NAME } from "../../type";
import TaskEditForm from '../modal-form/task-edit-form.vue'

const data = reactive({
	tableData: [...MOCK_DATA]
})

const modalFormProps = reactive({
	isVisible: false,
	title: '新建任务'
})

const taskEditFormProps = reactive({
	tableName: TABLE_NAME.ENV_QUALITY,
	tableData: data.tableData,
	index: 0,
	defaultFormData: {},
	close: () => modalFormProps.isVisible = false
})

const handleDispatch = (index: number, row: ContaminantTableColumns) => {
	console.log(index, row);
};
const handleAdd = (index: number, row: ContaminantTableColumns) => {
	modalFormProps.isVisible = true
	taskEditFormProps.defaultFormData = {}
}
const handleEdit = (index: number, row: ContaminantTableColumns) => {
	modalFormProps.isVisible = true
	taskEditFormProps.defaultFormData = { ...row }
	taskEditFormProps.index = index
};
const handleDelete = (index: number, row: ContaminantTableColumns) => {
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
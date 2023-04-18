<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { MOCK_DATA, columns, ContaminantTableColumns } from "./config";
import ModalForm from '../modal-form/index.vue'
import { TABLE_NAME } from "../../type";
import TaskEditForm from '../modal-form/task-edit-form.vue'
import { createTask, dispatchTask, getTaskList } from "@/apis/level-b";
import { Task } from "@/types";
import { ElMessage } from "element-plus";

const { fileIds, tableData, refreshData } = defineProps<{ fileIds: Array<string>, tableData: Array<Task>, refreshData: () => void }>()

const data: { tableData: Array<Task> } = reactive({
	tableData: []
})


const modalFormProps = reactive({
	isVisible: false,
	title: '新建任务'
})

const taskEditFormProps = reactive({
	tableName: TABLE_NAME.CONTAMINANT,
	tableData: data.tableData,
	index: 0,
	defaultFormData: {},
	close: () => modalFormProps.isVisible = false
})

const handleDispatch = async (index: number, row: Task) => {
	console.log(index, row);
	await dispatchTask({ taskId: row?.taskId, userId: '' })
	ElMessage({
		type: "success",
		message: `下发成功`,
	});
	refreshData()
};
const handleAdd = (index: number, row: Task) => {
	modalFormProps.isVisible = true
	taskEditFormProps.defaultFormData = {}
}
const handleEdit = (index: number, row: Task) => {
	modalFormProps.isVisible = true
	taskEditFormProps.defaultFormData = { ...row }
	taskEditFormProps.index = index
};
const handleDelete = (index: number, row: Task) => {
	data.tableData.splice(index, 1)
};

</script>

<template>
	<div class="header">
		<el-button type="primary" @click="handleAdd">新建任务</el-button>
	</div>

	<ModalForm :modalFormProps="modalFormProps">
		<TaskEditForm :taskEditFormProps="taskEditFormProps" :fileIds="fileIds" :refreshData="refreshData" />
	</ModalForm>

	<el-table :data="tableData" style="width: 100%">
		<el-table-column v-for="column in columns" :label="column.label" :prop="column.prop">
			<template #default="scope">
				{{ column?.render ? column.render(scope.row[column.prop]) : scope.row[column.prop] }}
			</template>
		</el-table-column>

		<el-table-column label="操作" width="200">
			<template #default="scope">
				<el-popconfirm v-if="!scope.row.to" @confirm="handleDispatch(scope.$index, scope.row)" width="220"
					confirm-button-text="确认" cancel-button-text="取消" icon-color="#626AEF" title="您确定下发该项吗?">
					<template #reference>
						<el-button size="small">下发</el-button>
					</template>
				</el-popconfirm>

				<el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>

				<el-popconfirm @confirm="handleDelete(scope.$index, scope.row)" width="220" confirm-button-text="确认"
					cancel-button-text="取消" icon-color="#626AEF" title="您确定删除该项吗?">
					<template #reference>
						<el-button type="danger" size="small">删除</el-button>
					</template>
				</el-popconfirm>


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

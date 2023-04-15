<script lang="ts" setup>
import { reactive } from "vue";
import { MOCK_DATA, columns, ContaminantTableColumns } from "./config";
import ModalForm from '../modal-form/index.vue'
import { TABLE_NAME } from "../../type";
import TaskEditForm from '../modal-form/task-edit-form.vue'

const handleDispatch = (index: number, row: ContaminantTableColumns) => {
	console.log(index, row);
};
const handleEdit = (index: number, row: ContaminantTableColumns) => {
	modalFormProps.isVisible = true
	// TODO: 还要自动回填一些内容
	console.log(index, row);
};
const handleDelete = (index: number, row: ContaminantTableColumns) => {
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
			<el-popconfirm @confirm="handleDispatch(scope.$index, scope.row)"
    				width="220"
    				confirm-button-text="确认"
    				cancel-button-text="取消"
    				:icon="InfoFilled"
    				icon-color="#626AEF"
    				title="您确定下发该项吗?"
  				>
    				<template #reference>
     		 		<el-button
          				link
          				type="primary"
          				size="small"
         
        			>下发</el-button>
    				</template>
  			</el-popconfirm>
			
			<el-popconfirm @confirm="handleEdit(scope.$index, scope.row)"
    				width="220"
    				confirm-button-text="确认"
    				cancel-button-text="取消"
    				:icon="InfoFilled"
    				icon-color="#626AEF"
    				title="您确定修改该项吗?"
  				>
    				<template #reference>
     		 		<el-button
          				link
          				type="primary"
          				size="small"
        			>修改</el-button>
    				</template>
  			</el-popconfirm>
			
			<el-popconfirm @confirm="handleDelete(scope.$index, scope.row)"
    				width="220"
    				confirm-button-text="确认"
    				cancel-button-text="取消"
    				:icon="InfoFilled"
    				icon-color="#626AEF"
    				title="您确定删除该项吗?"
  				>
    				<template #reference>
     		 		<el-button
          				link
          				type="danger"
          				size="small"
        			>删除</el-button>
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

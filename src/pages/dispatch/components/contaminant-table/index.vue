<script lang="ts" setup>
import { ref } from "vue";
import { MOCK_DATA, columns, ContaminantTableColumns } from "./config";

const handleEdit = (index: number, row: ContaminantTableColumns) => {
	console.log(index, row);
};
const handleDelete = (index: number, row: ContaminantTableColumns) => {
	console.log(index, row);
};

const isVisible = ref(false)
</script>

<template>
  <h3>污染物任务下发</h3>
  <div class="operations">
    <el-button type="primary" @click="isVisible = true">新建任务</el-button>
  </div>

  <el-dialog v-model="isVisible" title="新建任务">
    TODO
  </el-dialog>


	<el-table :data="MOCK_DATA" style="width: 100%">
		<el-table-column
			v-for="column in columns"
			:label="column.label"
			:prop="column.prop"
		>
			<template #default="scope">
				{{ scope.row[column.prop] }}
			</template>
		</el-table-column>

		<el-table-column label="Operations" width="200">
			<template #header>操作</template> 
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">下发</el-button>
        <el-button size="small" @click="handleDelete(scope.$index, scope.row)">修改</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
<script lang="ts" setup>
import { ElButton } from 'element-plus';
import { toUnicode } from 'punycode';
import { ref, shallowReactive } from 'vue'


const dialogTableVisible = ref(false);

const griddata = ref([{}]);

const gridData = ref([
  {
    Administrative_District: '1',
    Class: '1',
    Undertaking_Unit: '1',
    Frequency: '1',
    Task_Source: '1',
    Task_People: '1',
    Task_Time: '1',
  },
  {
    Administrative_District: '2',
    Class: '2',
    Undertaking_Unit: '2',
    Frequency: '2',
    Task_Source: '2',
    Task_People: '2',
    Task_Time: '2',
  },
  {
    Administrative_District: '3',
    Class: '3',
    Undertaking_Unit: '3',
    Frequency: '3',
    Task_Source: '3',
    Task_People: '3',
    Task_Time: '3',
  },
  {
    Administrative_District: '4',
    Class: '4',
    Undertaking_Unit: '4',
    Frequency: '4',
    Task_Source: '4',
    Task_People: '4',
    Task_Time: '4',
  },
]);
const tableData = [
  {
    Point_name: '1',
    Project: '1',
    id: '1',
    Task_Completion: '1',
  },
  {
    Point_name: '2',
    Project: '2',
    id: '2',
    Task_Completion: '2',
  }, {
    Point_name: '3',
    Project: '3',
    id: '3',
    Task_Completion: '3',
  }, {
    Point_name: '4',
    Project: '4',
    id: '4',
    Task_Completion: '4',
  },
];
function show(item: any) {
  griddata.value = gridData.value.filter(t => t.Frequency == item);
  dialogTableVisible.value = true;
}
</script>

<template>
  <el-table :data="tableData" border style="width: 100%;">
    <el-table-column prop="Point_name" label="点位名称" min-width="26%" align="center" />
    <el-table-column prop="Project" label="项目" min-width="22%" align="center" />
    <el-table-column prop="id" label="任务明细" min-width="22%" align="center">
      <template v-slot="scope">
        <el-Button type="primary" @click="show(scope.row.id)">查看</el-Button>
      </template>
    </el-table-column>
    <el-table-column prop="Task_Completion" label="任务完成度" min-width="30%" align="center" />
  </el-table>
  <el-dialog v-model="dialogTableVisible">
    <el-table :data="griddata" border style="width: 100%">
      <el-table-column property=" Administrative_District" label="市州行政区" min-width="14%" align="center" />
      <el-table-column property="Class" label="类别" min-width="8%" align="center" />
      <el-table-column property="Undertaking_Unit" label="承担单位" min-width="14%" align="center" />
      <el-table-column property="Frequency" label="频次" min-width="8%" align="center" />
      <el-table-column property="Task_Source" label="任务下达来源" min-width="18%" align="center" />
      <el-table-column property="Task_People" label="任务下达人" min-width="18%" align="center" />
      <el-table-column property="Task_Time" label="任务下达时间" min-width="18%" align="center" />
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

/* .el-table__body tr:hover>td {
  background-color: lightsteelblue !important;
} */

.check {
  background-color: royalblue !important;
  color: white;
}

.el-button {
  display: block;
  margin: 0 auto;
}
</style>
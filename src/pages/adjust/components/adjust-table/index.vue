<script lang="ts" setup>
import { ref } from "vue";
import { gridData, tableData, cities, columns } from './config'
const dialogTableVisible = ref(false);

const value = ref("");

</script>

<template>
  <el-row :gutter="20">
    <el-col :span="5">
      <el-select v-model="value" filterable placeholder="全部/待审核/通过/打回">
        <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: var(--el-text-color-secondary); font-size: 13px">{{
            item.value
          }}</span>
        </el-option>
      </el-select>
    </el-col>
  </el-row>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column v-for="column in columns" :prop="column.prop" :label="column.label" />
    <el-table-column label="操作" width="250">
      <template #header>操作</template>
      <template #default="scope">
        <el-button text @click="dialogTableVisible = true">
          查看
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="dialogTableVisible">
    <el-button>审核时间 </el-button>
    <el-button>审核人员 </el-button>
    <el-table :data="gridData">
      <el-table-column property="category" label="类目" />
      <el-table-column property="elename" label="数据名称" />
      <el-table-column property="cotent" label="含量" />
      <el-table-column property="threshold" label="阈值" />
      <el-table-column property="result" label="评价结果" />
    </el-table>
    <el-button>审核通过 </el-button>
    <el-button>打回 </el-button>
    <el-button>返回 </el-button>
  </el-dialog>
</template>

<style></style>

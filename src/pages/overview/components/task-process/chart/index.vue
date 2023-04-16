<script lang="ts" setup>
import { MOCK_DATA } from './config';
</script>

<template>
  <div>4月各区县任务进度排名</div>
  <el-table :data="MOCK_DATA" style="width: 100%">
    <el-table-column prop="date" />
    <el-table-column prop="name" />
    <el-table-column prop="address" />
  </el-table>
</template>


  
  
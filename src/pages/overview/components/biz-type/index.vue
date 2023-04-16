<script setup lang="ts">
import Chart from './chart/index.vue'
</script>

<template>
  <div class="wrapper">
    <el-card class="card">
      <el-tag size="large" class="tag">x市各类企业类型数量统计</el-tag>
      <Chart></Chart>
    </el-card>
  </div>
</template>

<style scoped>
.wrapper {}

.card {
  position: relative;
}

.tag {
  position: absolute;
  font-size: 18px;
  left: 0;
  top: 0;
}
</style>
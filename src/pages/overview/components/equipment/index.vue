<script setup lang="ts">
import Chart from './chart/index.vue'
</script>

<template>
  <div class="wrapper">
    <el-tag size="large" class="tag">x市设备统计情况</el-tag>
    <el-card class="card">
      <div class="charts">
        <Chart></Chart>
        <Chart></Chart>
        <Chart></Chart>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: relative;
}

.tag {
  position: absolute;
  font-size: 18px;
  left: 0px;
  top: 0px;
}

.card {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.charts {
  display: flex;
}
</style>
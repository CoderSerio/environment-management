<script setup lang="ts">
import Chart from './chart/index.vue'
</script>

<template>
  <div class="wrapper">
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
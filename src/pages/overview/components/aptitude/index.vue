<script setup lang="ts">
import Chart from './chart/index.vue'
</script>

<template>
  <div class="wrapper">
    <el-card class="card">
      <Chart></Chart>
    </el-card>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
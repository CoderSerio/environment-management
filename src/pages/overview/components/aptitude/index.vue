<script setup lang="ts">
import Chart from './chart/index.vue'
</script>

<template>
  <div class="wrapper">
    <el-tag size="large" class="tag">x市资质能力统计情况</el-tag>
    <el-card class="card">
      <Chart></Chart>
    </el-card>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
}

.card {
  width: 100%;
  display: flex;
  justify-content: center;
}

.tag {
  position: absolute;
  font-size: 18px;
  left: 0px;
  top: 0px;
}
</style>
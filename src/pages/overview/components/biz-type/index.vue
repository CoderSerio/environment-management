<script setup lang="ts">
import Chart from './chart/index.vue'
const props = defineProps({mapName:String})
</script>

<template>
  <div class="wrapper">
    <el-card class="card">
      <el-tag size="large" class="tag">{{props.mapName}}各类企业类型数量统计</el-tag>
      <Chart></Chart>
    </el-card>
  </div>
</template>

<style scoped>


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
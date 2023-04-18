<script setup lang="ts">
import Chart from './chart/index.vue'
const props = defineProps({mapName:String})
</script>

<template>
  <div class="wrapper">
    <el-tag size="large" class="tag">{{props.mapName}}人员统计情况</el-tag>
    <el-card class="card">
      <Chart></Chart>
    </el-card>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  position: relative;
}

.tag {
  position: absolute;
  font-size: 18px;
  left: 0px;
  top: 0px;
}

.card {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
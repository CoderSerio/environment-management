<script setup lang="ts">
import Detail from './detail/index.vue'
</script>

<template>
  <div class="wrapper">
    <el-card class="card">
      <el-tag class="tag">x市各类型任务详情</el-tag>
      <Detail></Detail>
    </el-card>
  </div>
</template>

<style scoped>
.card {
  position: relative;
}

.tag {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 18px;
}
</style>
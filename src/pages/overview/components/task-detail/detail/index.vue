<script setup lang="ts">
import TaskDetail from '../chart/index.vue'
</script>

<template>
  <div class="detail">
    <div v-for="i in 6" class="detail-item">
      <TaskDetail></TaskDetail>
    </div>
  </div>
</template>


<style scoped>
.detail {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 260px;
}

.detail-item {
  width: 33%;
  height: 50px;
}
</style>
<template>
  <div class="title">
    金牛区各类型任务详情
  </div>
  <div class="detail">
    <div v-for="i in 6" class="detail-item">
      {{ i }}
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
  height: 220px;
}

.detail-item {
  width: 33%;
  height: 50px;
}
</style>
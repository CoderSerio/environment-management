<script lang="ts" setup>
import Equipment from './components/equipment/index.vue'
import Personnel from './components/personnel/index.vue'
import Aptitude from './components/aptitude/index.vue'

import Map from './components/map/index.vue'
import BizType from './components/biz-type/index.vue'

import TaskProcess from './components/task-process/index.vue'
import TaskDetail from './components/task-detail/index.vue'

import { onMounted } from 'vue'
import { getMapData} from '@/apis/map'


const getMapData = async () => {
  const data = await getMapData()
  console.log('地图数据', data)
}

onMounted(() => {
  getMapData()
})


</script>

<template>
  <div class="wrapper">
    <div class="left">
      <Equipment></Equipment>
      <Personnel></Personnel>
      <Aptitude></Aptitude>
    </div>
    <div class="center">
      <Map></Map>
      <BizType></BizType>
    </div>
    <div class="right">右边</div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.left,
.center,
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 12px;
  margin: 0 12px;
}

.center {
  flex: 2;
}

.right {
  background-color: antiquewhite;
}
</style>
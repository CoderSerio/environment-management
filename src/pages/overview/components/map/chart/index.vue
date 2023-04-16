<script setup lang="ts" >
import * as echarts from 'echarts'
import { ref, defineProps, watch, onMounted } from 'vue'
import { option } from './config';

const eChartRef = ref<HTMLElement>()
let eChartInstance: any = null

// const echartsData = defineProps<{ data: Record<string, any> }>()
// watch(echartsData, () => {
// })

onMounted(() => {
  eChartInstance = echarts?.init(eChartRef.value as HTMLElement)
  eChartInstance?.setOption(option)
  window.addEventListener('resize', () => {
    eChartInstance?.resize()
  })
})
</script>

<template>
  <div class="wrapper">
    <div>地图暂时不做</div>
    <div id="echart" ref="eChartRef"></div>
  </div>
</template>

<style scoped>
.wrapper {
  min-width: 600px;
  overflow: auto;
}

#echart {
  width: 600px;
  height: 400px;
}
</style>
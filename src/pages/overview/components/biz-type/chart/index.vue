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
  <div id="echart" ref="eChartRef"></div>
</template>

<style scoped>
#echart {
  width: 600px;
  height: 400px;
}
</style>
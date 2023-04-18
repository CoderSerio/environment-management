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
  <div>
    <div id="echart" ref="eChartRef"></div>
    <div class="text">
      <div>正常 156</div>
      <div>异常 19</div>
    </div>
  </div>
</template>

<style scoped>
#echart {
  width: 160px;
  height: 140px;
}
</style>
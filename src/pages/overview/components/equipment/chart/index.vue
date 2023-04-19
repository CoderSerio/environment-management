<script setup lang="ts" >
import * as echarts from 'echarts'
import { ref, defineProps, watch, onMounted } from 'vue'
import { option } from './config';
import { useUserStore } from '@/stores';
let data1 = ref(option.series[0].data[0].value)
let data2 = ref(option.series[0].data[1].value)
const userStore = useUserStore()
const eChartRef = ref<HTMLElement>()
let eChartInstance: any = null
// const echartsData = defineProps<{ data: Record<string, any> }>()
// watch(echartsData, () => {
// })
watch(
  () =>userStore.getMap,
  ()=>{
    console.log("设备数据变化")
    //这里还有一个同异步问题，显示的数据实际上是上次的
    eChartInstance?.setOption(option)
    data1.value = option.series[0].data[0].value
    data2.value = option.series[0].data[1].value
  }
)
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
      <div>正常 {{ data1}}</div>
      <div>异常 {{ data2 }}</div>
    </div>
  </div>
</template>

<style scoped>
#echart {
  width: 160px;
  height: 140px;
}
</style>
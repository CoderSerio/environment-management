<script setup lang="ts" >
import "echarts/extension-src/bmap/bmap";
import * as echarts from 'echarts'
import { ref, defineProps, watch, onMounted } from 'vue'
import { option } from './config';
import { useUserStore } from '@/stores';
const userStore = useUserStore()
const eChartRef = ref<HTMLElement>()
let eChartInstance: any = null
watch(
  ()=>userStore.getMap,
  (newName,oldName)=>{
    eChartInstance?.setOption(option)
  }
)
// const echartsData = defineProps<{ data: Record<string, any> }>()
// watch(echartsData, () => {
// })
let mapName:string = userStore.getMap
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
  width: 450px;
  height: 220px;
}
</style>
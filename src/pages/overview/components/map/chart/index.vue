<script setup lang="ts" >
import { getMapData } from '@/apis/map';
import * as echarts from 'echarts'
import { ref, defineProps, watch, onMounted } from 'vue'
import { option } from './config';
const eChartRef = ref<HTMLElement>()
const isShow = ref(false)
const isLoading = ref(false)
let eChartInstance: echarts.EChartsType | undefined = undefined

// 初始化地图
const mapInit = async (name: string) => {
  isLoading.value = true
  eChartInstance = echarts?.init(eChartRef.value as HTMLElement)
  const mapData = await getMapData(name)
  echarts.registerMap('mapData', mapData);
  eChartInstance?.setOption({
    series: [{
      type: 'map',
      map: 'mapData'
    }],
  })
  isLoading.value = false
}

function goBack() {
  isShow.value = false
  mapInit("成都市")
}

onMounted(() => {
  mapInit("成都市")
  eChartInstance!.on('click', (params) => {
    // 防抖
    if (!isLoading.value) {
      mapInit(params.name)
      isShow.value = true
    }
  })
  window.addEventListener('resize', () => {
    eChartInstance?.resize()
  })
})

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
    <el-button size="large" class="btn" v-if="isShow" @click="goBack">返回</el-button>
    <div id="echart" ref="eChartRef"></div>
  </div>
</template>

<style scoped>
.wrapper {
  min-width: 600px;
  overflow: auto;
  position: relative;
}

.btn {
  position: absolute;
  z-index: 100;
}

#echart {
  width: 600px;
  height: 400px;
}
</style>
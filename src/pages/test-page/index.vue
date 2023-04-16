<script setup lang="ts">
import Demo1 from '@/pages/common/demo1/index.vue'
import Demo2 from '@/pages/common/demo2/index.vue'
import Ataskorder from "@/pages/common/ATaskOrder/index.vue"
import Demo3 from '@/pages/common/demo3/index.vue'
import Demo4 from '@/pages/common/history/index.vue'
import verify from '@/pages/common/verify/index.vue'
import map1 from '@/pages/common/map/index.vue'
import { ref } from 'vue';
const activeName = ref('1')

</script>

<template>
  <div>这是测试弢�发页面，把你的组件写好了扔到下面就好</div>
  <el-tabs v-model="activeName">
    <el-tab-pane label="Vue语法Demo" name="1">
      <Demo1 />
      <Demo2 />
      <Demo3 />
      <Demo4 />
    </el-tab-pane>
    <el-tab-pane label="组件请放到这釄1�7" name="2">
      <Ataskorder />
      <verify />
      <map1 /> 
      
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped></style>

<script setup lang="ts">
import Demo1 from '@/pages/common/demo1/index.vue'
import Demo2 from '@/pages/common/demo2/index.vue'
import Ataskorder from "@/pages/common/ATaskOrder/index.vue"
import Demo3 from '@/pages/common/demo3/index.vue'
import Demo4 from '@/pages/common/demo4/index.vue'
import verify from '@/pages/common/verify/index.vue'
import CTaskSubmission from '@/pages/common/CTaskSubmission/index.vue'
import map1 from '@/pages/common/map/index.vue'
import { reactive, ref } from 'vue';

import { getFileList, uploadFile, dispatchFile } from '@/apis/level-a'


const activeName = ref('3')
// 用来指定各种参数
const params = reactive({
  fileId: '0',
  taskId: '0',
})
</script>

<template>
  <div>这是测试开发页面，把你的组件写好了扔到下面就好</div>
  <el-tabs v-model="activeName">
    <el-tab-pane label="Vue语法Demo" name="1">
      <Demo1 />
      <Demo2 />
      <Demo3 />
      <Demo4 />
    </el-tab-pane>

    <el-tab-pane label="组件请放到这里" name="2">
      <Ataskorder />
      <verify />
      <CTaskSubmission />
      <map1 />
      <Demo4 />
    </el-tab-pane>

    <el-tab-pane label="接口测试请到这里" name="3">
      <div style="margin:20px">
        <div>这里可以输入参数</div>
        <div>fileId: <input v-model="params.fileId"></div>
        <div>taskId: <input v-model="params.taskId"></div>
      </div>

      <el-button @click="uploadFile" type="primary">A文件上传</el-button>
      <el-button @click="getFileList" type="primary">A查看文件列表</el-button>
      <el-button @click="dispatchFile({ fileId: params.fileId, userId: '' })" type="primary">A下发任务</el-button>

    </el-tab-pane>
  </el-tabs>
</template>

<style scoped></style>

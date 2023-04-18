<template>
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="kind" label="类别" width="100" />
      <el-table-column prop="name" label="点位名称" width="150" />
      <el-table-column prop="address" label="GPS" width="170" />
      <el-table-column prop="name" label="项目" width="150" />
      <el-table-column prop="address" label="上传文件" width="270" />
      <el-table-column prop="time" label="上传时间" width="150" />
      <el-table-column prop="situation" label="审核状态" width="120" />
      <el-table-column prop="date" label="审核时间" width="120" />
      <el-table-column fixed="right" label="查看" width="120">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
          >
            查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="mt-4" style="width: 100%" @click="onAddItem"
      >Add Item</el-button
    >
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import dayjs from 'dayjs'
  
  const now = new Date()
  
  const tableData = ref([
    {
      date: '2016-05-01',
      time: '05.01.22.14',
      name: '污水处理',
      kind: '工程',
      situation:'待审阅',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-02',
      time: '05.01.22.14',
      name: '西宁市地质勘探',
      kind: '工程',
      situation:'待审阅',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-03',
      time: '05.01.22.14',
      kind: '勘探',
      situation:'待审阅',
      name: '西宁市水质勘测',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
  ])
  
  const deleteRow = (index: number) => {
    tableData.value.splice(index, 1)
  }
  
  const onAddItem = () => {
    now.setDate(now.getDate() + 1)
    tableData.value.push({
      date: dayjs(now).format('YYYY-MM-DD'),
      time: '05.01.22.14',
      name: 'undefined',
      state: 'undefined',
      kind: '勘探',
      situation:'待审阅',
      city: 'undefined',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    })
  }
  </script>
  
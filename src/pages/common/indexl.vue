<template>
  <el-table
    :data="tableData"
    :default-sort="{ prop: 'address', order: 'descending'}"
    style="width: 100%; background:#67C23A"
  >
    <el-table-column prop="date" label="4月各区县任务进度排名" custom width="200"/>
    <el-table-column prop="name"  width="200"/>
    <el-table-column prop="address" :formatter="formatter" />
  </el-table>
</template>

<script lang="ts" setup>

import type { TableColumnCtx } from 'element-plus'

interface User {
  date: string
  name: string
  address: string
}

const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address
}

const tableData: User[] = [
  {
    date: '1',
    name: '金牛区',
    address: '59%',
  },
  {
    date: '2',
    name: '成华区',
    address: '54%',
  },
  {
    date: '3',
    name: '青羊区',
    address: '50%',
  },
  {
    date: '4',
    name: '锦江区',
    address: '44%',
  },
  {
    date: '5',
    name: '武侯区',
    address: '43%',
  },
  {
    date: '6',
    name: '新都区',
    address: '34%',
  },
  {
    date: '7',
    name: '双流区',
    address: '32%',
  },
  {
    date: '8',
    name: '郫都区',
    address: '30%',
  },
  {
    date: '9',
    name: '温江区',
    address: '28%',
  },
]
</script>

  
  
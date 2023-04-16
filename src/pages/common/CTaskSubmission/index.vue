<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import type { UploadInstance, UploadProps, UploadUserFile } from 'element-plus'

const dialogVisible = ref(false)

const now = new Date()

const tableData = ref([
  {
    category: '',
    PointName: '',
    GPS: '',
    Project:'',
    TaskLoad:'',
    NOE:'',//Number of executions
    Filename:'',
    Time:'',
  },
])

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate())
  tableData.value.push({
    category:'' ,
    PointName: '',
    GPS: '',
    Project: '',
    TaskLoad: '',
    NOE:'',
    Filename:'',
    Time:dayjs(now).format('YYYY-MM-DD'),
  })
}



const uploadRef = ref<UploadInstance>()
const count = ref(0)

const submitUpload = () => {
  uploadRef.value!.submit()
  count.value++
}

const fileList = ref<UploadUserFile[]>([
])

const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
  fileList.value = fileList.value.slice(-3)
}

const num = ref(0)
const handleChange1 = (value: number) => {
  console.log(value)
}

</script>

<template>
  <div>这是一个demo，用于展示放到测试页的正确姿势——SYY</div>
  <el-table :data="tableData" border style="width: 100%" :header-cell-style="{background:'#4472c4',color:'#ffffff'}">
    <el-table-column fixed="" label="" width="0"/>
    <el-table-column prop="category" label="类别" width="150"/>
    <el-table-column prop="PointName" label="点位名称" width="120" />
    <el-table-column prop="GPS" label="GPS" width="120" />
    <el-table-column prop="Project" label="项目" width="120" />
    <el-table-column prop="TaskLoad" label="任务量" width="150" />
    <el-table-column prop="NOE" label="执行次数" width="120" >
      <div style="color: red">
        {{ count }}
      </div>
    </el-table-column>
    <el-table-column prop="Filename" label="文件名" width="120" />
    <el-table-column prop="Time" label="时间" width="120" />
    <el-table-column prop="OP" label="操作" width="150" >
      <el-upload
      v-model:file-list="fileList"
    ref="uploadRef"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :auto-upload="false"
  >
    <template #trigger>
      <el-button type="primary" @change="handleChange1" >上传</el-button>
      &nbsp;
    </template>

    <div id="add">
      <el-button class="ml-3" type="success" @click="submitUpload"  >
      提交
    </el-button>
    </div>

    <template #tip>
    </template>
  </el-upload>
    </el-table-column>
  </el-table>
  <el-button class="mt-4" style="width: 100%" @click="onAddItem">添加新的项</el-button>
</template>


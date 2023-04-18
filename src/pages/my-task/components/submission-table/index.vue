<script lang="ts" setup>
import { ref } from 'vue'
import type { UploadInstance, UploadProps, UploadUserFile } from 'element-plus'
import { MOCK_DATA, columns } from './config';


const dialogVisible = ref(false)

const tableData = ref([
  {
    category: '',
    PointName: '',
    GPS: '',
    Project: '',
    TaskLoad: '',
    NOE: '',//Number of executions
    Filename: '',
    Time: '',
  },
])

const uploadRef = ref<UploadInstance>()
const count = ref(0)

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
  <el-table :data="MOCK_DATA" style="width: 100%">
    <el-table-column v-for="column in columns" :label="column.label" :prop="column.prop">
      <template #default="scope">
        {{ scope.row[column.prop] }}
      </template>
    </el-table-column>

    <el-table-column prop="OP" label="操作" width="200">
      <el-upload :show-file-list="false" v-model:file-list="fileList" ref="uploadRef" class="upload-demo"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :auto-upload="false">
        <template #trigger>
          <el-button @change="handleChange1">上传文件</el-button>
        </template>

        <div id="add">
          <el-button type="primary" @click="">
            确认提交
          </el-button>
        </div>

        <template #tip>
        </template>
      </el-upload>
    </el-table-column>
  </el-table>
  <!-- <el-button class="mt-4" style="width: 100%" @click="onAddItem">添加新的项</el-button> -->
</template>


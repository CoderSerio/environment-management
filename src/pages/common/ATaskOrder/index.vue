<script setup lang="ts">
import { Ref, ref } from 'vue';
import { Timer } from '@element-plus/icons-vue'
import { Action, ElMessage, ElMessageBox, UploadProps, UploadUserFile } from 'element-plus';
import { UploadFilled } from '@element-plus/icons-vue'
import { Message } from "element-plus";

// let name:Ref<string> = ref(" ")
// function handleFileUpload(e:any){
//     console.log(e.target.files[0].name)
//     name.value = String(e.target.files[0].name)
// }
interface User {
  time: string
  name: string
  files?: string
  Accuratetime?: string
}
const header = {
  Authorization: 'Ked6TSuh65G0PJ3PiVZ2aYwCvuGZXruZ'
}
const dialogVisible = ref(false)
const tableData: Ref<User[]> = ref([
  {
    name: 'dawn.png',
    Accuratetime: '2022-02-06 19：09',
    time: "02-06",
    files: ''
  },
])
const fileList = ref<UploadUserFile[]>([

])
let isUpload = false
let upload = 0
//事件控制

/*点击新建任务事件，显示上传框，重置上传标志*/
const newTask = ()=>{
  isUpload = false
  dialogVisible.value = true
}
// 点击确认事件，根据上传标志检查是否成功上传并对用户进行提醒
const sentTask =()=>{
    if(isUpload){
        dialogVisible.value = false
    }
    else{
        ElMessage({
        type: 'error',
        message: `文件并未上传成功！`,
      })
    }
}
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
//任务删除事件
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
  tableData.value.splice(index, 1)
  console.log(tableData)
}
//任务修改事件
const taskChange = (index: number, row: User) => {

}
const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
  // fileList.value.push({name:uploadFile.name,url:uploadFile.url})
  // console.log(uploadFile)
}

const beforeUpload: UploadProps['beforeUpload'] = (uploadFiles) => {
  console.log(uploadFiles)
}
const uploadSuccess: UploadProps['onSuccess'] = (response, uploadFile, uploadFiles) => {
  if (uploadFile.raw) {
    var date = new Date(uploadFile.raw.lastModified * 1000)
    tableData.value.push({
      name: uploadFile.name,
      time: date.toDateString(),
    })
    console.log(response)
    console.log()
  }
  ElMessage({
    type: 'success',
    message: `上传成功！`,
  })
  isUpload = true
}
const uploadError: UploadProps['onError'] = (uploadFiles) => {
  console.log(uploadFiles)
  if (upload ? false : ++upload) {
    ElMessageBox.alert('请检查网络连接', '上传失败', {
      // if you want to disable its autofocus
      // autofocus: false,
      confirmButtonText: 'OK',
      callback: (action: Action) => {
        ElMessage({
          type: 'error',
          message: `上传失败！请检查你的网络连接是否正确!`,
        })
      },
    })
  }

}
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('确定取消创建任务吗？')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>

<template>
  <div class="main">
    <div class="button">
      <el-button type="primary" @click="newTask">新建任务</el-button>
    </div>
    <el-table :data="tableData" table-layout="fixed" size="large" class="table">
      <el-table-column label="文件名称" width="280" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center;justify-content: center;">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="下发时间" width="480" align="center">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #default>
              <div>具体时间： {{ scope.row.Accuratetime }}</div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.time }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" header-align="center">

        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">下发</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="small" type="" @click="taskChange(scope.$index, scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" title="新建任务" width="30%" :before-close="handleClose">
      <el-upload v-model:file-list="fileList" method="POST" class="upload-demo" drag action="/api" multiple="true"
        :headers="header" name="smfile" show-file-list="true" :on-change="handleChange" :on-success="uploadSuccess"
        :on-error="uploadError" :before-upload="beforeUpload">
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
          拖拽文件 或者 <em>点击上传</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">
            选择文件进行上传
          </div>
        </template>
      </el-upload>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="sentTask">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.table {
  width: 100%;
}

.button {
  width: 80%;
  flex: 1;
  text-align: right
}
</style>
<script setup lang="ts">
import { Ref, ref, onMounted, reactive } from "vue";
import { Action, dayjs, ElMessage, ElMessageBox, UploadProps } from "element-plus";
import { Message, UploadFilled } from "@element-plus/icons-vue";
import { dispatchFile, getFileList, uploadFile } from "@/apis/level-a";
import { TaskFile } from '@/types/index'

// TODO: 挪到bff去
const header = {
  Authorization: "Ked6TSuh65G0PJ3PiVZ2aYwCvuGZXruZ",
};

const dialogVisible = ref(false);


const { tableData } = defineProps<{ tableData: Array<TaskFile> }>()

const data: { fileList: Array<any> } = reactive({
  fileList: []
})


let isUpload = false;
let upload = 0;

//事件控制
/*点击新建任务事件，显示上传框，重置上传标志*/
const newTask = () => {
  isUpload = false;
  dialogVisible.value = true;
};
// 点击确认事件，根据上传标志检查是否成功上传并对用户进行提醒
const sentTask = () => {
  // if (isUpload) {
  //   dialogVisible.value = false;
  // } else {
  //   ElMessage({
  //     type: "error",
  //     message: `文件并未上传成功！`,
  //   });
  // }
  uploadFile()
  dialogVisible.value = false;
  ElMessage({
    type: "success",
    message: `文件上传成功！`,
  });
};
const handleEdit = (index: number, row: TaskFile) => {
  console.log(index, row);
};

//任务删除事件
const handleDelete = (index: number, row: TaskFile) => {
  console.log(index, row);
  tableData.splice(index, 1);
  console.log(tableData);
};
//任务修改事件
const taskChange = (index: number, row: TaskFile) => {
  dialogVisible.value = true
};

const handleDispatch = (index: number, row: TaskFile) => {
  dispatchFile({ fileId: row.fileId, userId: '' })
  ElMessage({
    type: "success",
    message: `下发成功！`,
  });
};

const handleChange: UploadProps["onChange"] = (uploadFile, uploadFiles) => {
  // fileList.value.push({name:uploadFile.name,url:uploadFile.url})
  // console.log(uploadFile)
};

const beforeUpload: UploadProps["beforeUpload"] = (uploadFiles) => {
  console.log(uploadFiles);
};

// TODO: 上传相关函数要封装抽离成工具函数
const uploadSuccess: UploadProps["onSuccess"] = (response, uploadFile, uploadFiles) => {
  // if (uploadFile.raw) {
  //   var date = new Date(uploadFile.raw.lastModified * 1000);
  //   tableData.value.push({
  //     name: uploadFile.name,
  //     time: date.toDateString(),
  //   });
  //   console.log(response);
  // }
  // ElMessage({
  //   type: "success",
  //   message: `上传成功！`,
  // });
  // isUpload = true;
};
const uploadError: UploadProps["onError"] = (uploadFiles) => {
  console.log(uploadFiles);
  if (upload ? false : ++upload) {
    ElMessageBox.alert("请检查网络连接", "上传失败", {
      confirmButtonText: "OK",
      callback: (action: Action) => {
        ElMessage({
          type: "error",
          message: `上传失败！请检查你的网络连接是否正确!`,
        });
      },
    });
  }
};
const handleClose = (done: () => void) => {
  ElMessageBox.confirm("确定取消创建任务吗？")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
</script>

<template>
  <div class="main">
    <div class="button">
      <el-button type="primary" @click="newTask">上传文件</el-button>
    </div>

    <el-table :data="tableData" table-layout="fixed" size="large" class="table">
      <el-table-column label="文件名称" prop="fileId" />


      <el-table-column label="下发时间">
        <template #default="scope">
          <el-tag>{{ dayjs.unix((new Date().getTime()) / 1000).format('YYYY-MM-DD HH:mm') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template #default="scope">

          <el-popconfirm v-if="!scope.row.to" confirm-button-text="是" cancel-button-text="否" icon-color="#626AEF"
            title="是否确定下发?" @confirm="handleDispatch(scope.$index, scope.row)">
            <template #reference>
              <el-button size="small">下发</el-button>
            </template>
          </el-popconfirm>

          <el-popconfirm confirm-button-text="是" cancel-button-text="否" icon-color="red" title="是否确定删除?"
            @confirm="handleDelete(scope.$index, scope.row)">
            <template #reference>
              <el-button size="small" type="danger" @click="">删除</el-button>
            </template>

          </el-popconfirm>

          <el-button size="small" type="" @click="taskChange(scope.$index, scope.row)">修改</el-button>

          <!-- <el-button size="small" type="" @click="taskPreview(scope.$index, scope.row)">查看</el-button> -->

        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" title="任务" width="30%" :before-close="handleClose">
      <el-upload v-model:file-list="data.fileList" method="POST" class="upload-demo" drag action="/api" multiple="true"
        :headers="header" name="smfile" show-file-list="true" :on-change="handleChange" :on-success="uploadSuccess"
        :on-error="uploadError" :before-upload="beforeUpload">
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">拖拽文件 或者 <em>点击上传</em></div>
        <template #tip>
          <div class="el-upload__tip">选择文件进行上传</div>
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
  text-align: right;
}
</style>

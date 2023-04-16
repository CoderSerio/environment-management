

<template>
  <div>
    <el-button @click="uploadFile">上传文件</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    uploadFile() {
      const input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('multiple', true)
      input.addEventListener('change', this.handleFileSelect)
      input.click()
    },
    handleFileSelect(event) {
      const files = event.target.files
      for(let i = 0; i < files.length; i++) {
        console.log(files[i].name) // 输出文件名
      }
    }
  }
}
</script>
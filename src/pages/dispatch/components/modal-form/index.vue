<script setup lang="ts">import { ref, Ref } from 'vue';
const props = defineProps<{ 
  modalFormProps: { 
    isVisible: boolean, 
    title: string 
  }}>()
</script>


<template>
  <el-dialog 
  v-model="props.modalFormProps.isVisible" 
  :title="props.modalFormProps.title" 
  :before-close="() => props.modalFormProps.isVisible = false">
    <slot />
  </el-dialog>
</template>
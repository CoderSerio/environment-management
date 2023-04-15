<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { TABLE_NAME } from '../../type';
import { ContaminantTableColumns } from '../contaminant-table/config';

const props = defineProps<{
  taskEditFormProps: {
    tableName: TABLE_NAME
    tableData: Array<Record<string, any>>
    index: number,
    defaultFormData: Record<string, any>,
    close: () => void
  }
}>()

const form = ref<Record<string, any>>({ ...props?.taskEditFormProps?.defaultFormData })

watch(props, () => {
  form.value = { ...props?.taskEditFormProps?.defaultFormData }
})

const onSubmit = () => {
  // 如果有默认值，说明这是修改操作; 否则即为新增
  if (Object.keys(props?.taskEditFormProps?.defaultFormData).length) {
    const index = props.taskEditFormProps.index
    props.taskEditFormProps.tableData[index] = { ...form.value }
    props.taskEditFormProps.close()
  } else {
    props.taskEditFormProps.tableData.unshift({ ...form.value })
    props.taskEditFormProps.close()
  }
}
</script>

<template>
  <el-form :model="form" label-width="120px">

    <el-form-item label="市州行政区">
      <el-select v-model="form.district" placeholder="请选择市州行政区">
        <el-option label="A区" value="A" />
        <el-option label="B区" value="B" />
      </el-select>
    </el-form-item>

    <el-form-item label="类别">
      <el-checkbox-group v-model="form.class">
        <el-checkbox label="类别1" name="class" />
        <el-checkbox label="类别2" name="class" />
        <el-checkbox label="类别3" name="class" />
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="企业名称">
      <el-select v-model="form.companyName" placeholder="请选择企业">
        <el-option label="企业1" value="A" />
        <el-option label="企业2" value="B" />
      </el-select>
    </el-form-item>

    <el-form-item label="承担单位">
      <el-select v-model="form.undertakenOrganization" placeholder="请选择承担单位">
        <el-option label="单位1" value="1" />
        <el-option label="单位2" value="2" />
      </el-select>
    </el-form-item>

    <el-form-item label="频次" placeholder="请输入频次">
      <el-input v-model="form.frequency" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">确定</el-button>
      <el-button @click="() => props.taskEditFormProps.close()">取消</el-button>
    </el-form-item>
  </el-form>
</template>


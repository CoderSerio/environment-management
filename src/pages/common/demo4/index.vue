<script lang="ts" setup>
import { reactive, ref } from 'vue'
const tableData = [
    {
        pointName: '新都区',
        programName: '水质环境监测',
        taskCompletion: '95%',
    },
    {
        pointName: '新都区',
        programName: '水质环境监测',
        taskCompletion: '95%',
    },
    {
        pointName: '新都区',
        programName: '水质环境监测',
        taskCompletion: '95%',
    },
    {
        pointName: '新都区',
        programName: '水质环境监测',
        taskCompletion: '95%',
    },
]
const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const gridData = [
    {
        cityRegion: '新都区',
        category: '水质类',
        undertakingUnit: '新都区环境监测部',
        frequency: '5次/月',
        taskSource: 'A级用户',
        taskPublisher: '-',
        taskPublishTime: '2023-4-6',
    },
    {
        cityRegion: '新都区',
        category: '水质类',
        undertakingUnit: '新都区环境监测部',
        frequency: '5次/月',
        taskSource: 'A级用户',
        taskPublisher: '-',
        taskPublishTime: '2023-4-6',
    },
    {
        cityRegion: '新都区',
        category: '水质类',
        undertakingUnit: '新都区环境监测部',
        frequency: '5次/月',
        taskSource: 'A级用户',
        taskPublisher: '-',
        taskPublishTime: '2023-4-6',
    },
    {
        cityRegion: '新都区',
        category: '水质类',
        undertakingUnit: '新都区环境监测部',
        frequency: '5次/月',
        taskSource: 'A级用户',
        taskPublisher: '-',
        taskPublishTime: '2023-4-6',
    },
]
</script>
<style scoped>
.el-button--text {
    margin-right: 15px;
}

.el-select {
    width: 300px;
}

.el-input {
    width: 300px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>

<template>
    <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="pointName" label="点位名称" width="180" />
        <el-table-column prop="programName" label="项目" width="180" />
        <el-table-column prop="taskDetails" label="任务明细" width="100">
            <template #default="scope">
                <el-button text @click="dialogTableVisible = true">
                    查看明细
                </el-button>
            </template>
        </el-table-column>
        <el-table-column prop="taskCompletion" label="任务完成度" />
    </el-table>

    <template>


        <el-dialog v-model="dialogTableVisible" title="Shipping address">
            <el-table :data="gridData">
                <el-table-column property="cityRegion" label="市州行政区" width="150" />
                <el-table-column property="category" label="类别" width="200" />
                <el-table-column property="undertakingUnit" label="承担单位" width="200" />
                <el-table-column property="frequency" label="频次" width="200" />
                <el-table-column property="taskSource" label="任务下达来源" width="200" />
                <el-table-column property="taskPublisher" label="任务下达人" width="200" />
                <el-table-column property="taskPublishTime" label="任务下达时间" width="200" />
            </el-table>
        </el-dialog>
    </template>
</template>



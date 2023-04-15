<script lang="ts" setup>
import { ReducedMotionType } from '@vueuse/core';
import { reactive, ref } from 'vue'
const dialogTableVisible = ref(false)
const formLabelWidth = '140px'

const gridData = [
    {
        category: '2016-05-02',
        elename: 'John Smith',
        content: '6',

    },
    {
        category: '2016-05-02',
        elename: 'John Smith',
        content: 'No.1518,  Jinshajiang Road, Putuo District',

    },
    {
        category: '2016-05-02',
        elename: 'John Smith',
        content: 'No.1518,  Jinshajiang Road, Putuo District',

    },
    {
        category: '2016-05-02',
        elename: 'John Smith',
        content: 'No.1518,  Jinshajiang Road, Putuo District',

    },
]
const value = ref('')
const cities = [
    {
        item: '全部',
        label: '全部',
    },
    {
        value: '待审核',
        label: '待审核',
    },
    {
        value: '通过',
        label: '通过',
    },
    {
        value: '打回',
        label: '打回',
    },

]

interface User {
    item: string
    time: string
    unit: string
    item2: string
    status: string
    operate: string
}

const tableRowClassName = ({
    row,
    rowIndex,
}: {
    row: User
    rowIndex: number
}) => {
    if (rowIndex % 2 == 0) {
        return 'warning-row'
    } else if (rowIndex % 2 == 1) {
        return 'success-row'
    }
    return ''
}

const tableData: User[] = [
    {
        item: '66666',
        time: '',
        unit: '',
        item2: '',
        status: '',
        operate: '',
    },
    {
        item: '66666',
        time: '',
        unit: '',
        item2: '',
        status: '',
        operate: '',
    },
    {
        item: '6',
        time: '',
        unit: '',
        item2: '',
        status: '',
        operate: '',
    },
    {
        item: '6',
        time: '',
        unit: '',
        item2: '',
        status: '',
        operate: '',
    },
]
</script>

<template>
    <el-row :gutter="20">
        <el-col :span="5">
            <el-select v-model="value" filterable placeholder="全部/待审核/通过/打回">
                <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
                    <span style="float: left">{{ item.label }}</span>
                    <span
                        style="
                                                                                                                                                                                                                              float: right;
                                                                                                                                                                                                                              color: var(--el-text-color-secondary);
                                                                                                                                                                                                                              font-size: 13px;
                                                                                                                                                                                                                            ">{{
                                                                                                                                                                                                                                item.value
                                                                                                                                                                                                                            }}</span>
                </el-option>
            </el-select>
        </el-col>
    </el-row>





    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName" :header-cell-style="{
        color: '#fff',
        background: '#337ecc',
        fontWeight: '700',
    }" border>
        <el-table-column prop="item" label="项目" />
        <el-table-column prop="time" label="时间" />
        <el-table-column prop="unit" label="单位" />
        <el-table-column prop="item2" label="项目" />
        <el-table-column prop="status" label="状态" />
        <el-table-column label="Operations" width="250">
            <template #header>操作</template>
            <template #default="scope">
                <el-button text @click="dialogTableVisible = true">
                    查看
                </el-button>
            </template>
        </el-table-column>

    </el-table>


    <el-dialog v-model="dialogTableVisible">
        <el-button>审核时间 </el-button>
        <el-button>审核人员 </el-button>
        <el-table :data="gridData">
            <el-table-column property="category" label="类目" />
            <el-table-column property="elename" label="数据名称" />
            <el-table-column property="cotent" label="含量" />
            <el-table-column property="threshold" label="阈值" />
            <el-table-column property="result" label="评价结果" />
        </el-table>
        <el-button>审核通过 </el-button>
        <el-button>打回 </el-button>
        <el-button>返回 </el-button>


    </el-dialog>
</template>
 


<style>
.el-table .warning-row {
    background-color: #c6e2ff;
}

.el-table .success-row {
    background-color: #ecf5ff;
}

.grid-content {
    border-radius: 8px;
    min-height: 60px;
}

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
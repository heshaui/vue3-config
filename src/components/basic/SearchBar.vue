<script setup lang="ts">
    import { Delete, Download } from '@element-plus/icons-vue'
    const infoVisible = ref(false)
    const title = ref('手机')
    const quantity = ref(1000)
    const form = reactive({
        ipcType: [],
        applicationYear: [],
        publicYear: [],
        patentValidity: [],
        patentType: []
    })
    const ipcTypes = [
        { label: 'B60R16/02', value: 1 },
        { label: 'H04L29/08', value: 2 }
    ]
    const onTitClick = () => {
        infoVisible.value = true
    }
    const onSave = (form: { name: string }) => {
        title.value = form.name
    }
</script>

<template>
    <div class="px-[20px] py-[10px] rounded-md border border-[#ccc] border-solid">
        <div class="flex justify-between mb-[20px]">
            <div class="flex items-center cursor-pointer" @click="onTitClick">
                <span class="text-xl mr-[15px]">{{ title }}</span>
                <el-icon :size="20"><Edit /></el-icon>
            </div>
            <div>
                <el-button :icon="Delete" link>删除</el-button>
                <el-button :icon="Download" link>下载报告</el-button>
            </div>
        </div>
        <div class="overflow-hidden">
            <span v-if="infoVisible">检索表达式：（汽车）or （手机）</span>
            <span class="float-right">申请量：{{ quantity }}条</span>
        </div>
        <div class="flex justify-between mt-4">
            <el-select v-model="form.ipcType" multiple clearable placeholder="IPC分类-部" class="mr-[20px]">
                <template #header>
                    <div class="text-base/[30px] font-medium">选择IPC分类</div>
                    <!-- <el-checkbox
                        v-model="checkAll"
                        :indeterminate="indeterminate"
                        @change="handleCheckAll"
                    >
                        IPC分类-部
                    </el-checkbox> -->
                </template>
                <el-option v-for="item in ipcTypes" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-select v-model="form.ipcType" multiple clearable placeholder="IPC分类-部" class="mr-[20px]">
                <el-option v-for="item of ipcTypes" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-select v-model="form.ipcType" multiple clearable placeholder="IPC分类-部" class="mr-[20px]">
                <el-option v-for="item of ipcTypes" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-select v-model="form.ipcType" multiple clearable placeholder="IPC分类-部" class="mr-[20px]">
                <el-option v-for="item of ipcTypes" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-select v-model="form.ipcType" multiple clearable placeholder="IPC分类-部">
                <el-option v-for="item of ipcTypes" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <EditDialog v-if="infoVisible" v-model:visible="infoVisible" @onSave="onSave" />     
    </div>
</template>
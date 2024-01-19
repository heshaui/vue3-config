<script setup lang="ts">
    import { Delete, Download, Edit } from '@element-plus/icons-vue'
    const infoVisible = ref(false)
    const title = ref('北京遥体科技有限公司')
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
    const onEdit = () => {
        infoVisible.value = true
    }
    const onSave = (form: { name: string }) => {
        title.value = form.name
    }
</script>

<template>
    <div class="p-[20px] rounded-md border border-[#ccc] border-solid">
        <div class="flex justify-between mb-[15px]">
            <span class="text-[18px]/[20px] font-semibold">{{ title }}</span>
            <div>
                <el-button :icon="Edit" link @click="onEdit">编辑</el-button>
                <el-button :icon="Delete" link>删除</el-button>
                <el-button :icon="Download" link>下载报告</el-button>
            </div>
        </div>
        <div class="overflow-hidden mb-[15px]">
            <span>检索表达式：（汽车）or （手机）</span>
            <span class="float-right">申请量：{{ quantity }}条</span>
        </div>
        <div class="flex justify-between">
            <el-select v-model="form.ipcType" multiple clearable placeholder="IPC分类" class="mr-[20px]">
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
            <el-select v-model="form.ipcType" multiple clearable placeholder="申请年" class="mr-[20px]">
                <el-option v-for="item of ipcTypes" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-select v-model="form.ipcType" multiple clearable placeholder="公开年" class="mr-[20px]">
                <el-option v-for="item of ipcTypes" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-select v-model="form.ipcType" multiple clearable placeholder="专利有效性" class="mr-[20px]">
                <el-option v-for="item of ipcTypes" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-select v-model="form.ipcType" multiple clearable placeholder="专利类型">
                <el-option v-for="item of ipcTypes" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <EditDialog v-if="infoVisible" v-model:visible="infoVisible" @onSave="onSave" />     
    </div>
</template>
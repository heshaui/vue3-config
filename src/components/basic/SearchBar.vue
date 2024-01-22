<script setup lang="ts">
    import { Delete, Download, Edit } from '@element-plus/icons-vue'
    const infoVisible = ref(false)
    const title = ref('北京遥体科技有限公司')
    const quantity = ref(1000)
    const form:any = reactive({
        ipcType: [],
        applicationYear: [],
        publicYear: [],
        patentValidity: [],
        patentType: []
    })
    const ipcTypes = [
        { label: 'B60R16/02', value: '1' },
        { label: 'H04L29/08', value: '2' }
    ]
    const patentValiditys = [
        { label: '有效', value: '1' },
        { label: '失效', value: '2' },
        { label: '审中', value: '3' },
        { label: 'PCT制定期满', value: '4' },
        { label: 'PCT制定期内', value: '5' },
    ]
    const patentTypes = [
        { label: '发明申请', value: '1' },
        { label: '实用新型', value: '2' },
        { label: '外观设计', value: '3' },
        { label: '其它', value: '4' },
    ]
    const onEdit = () => {
        infoVisible.value = true
    }
    const onSave = (form: { name: string }) => {
        title.value = form.name
}
    const onSearch = (sels:any, type:any) => {
        form[type] = sels
        console.log(sels)
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
            <CheckboxSelect label="IPC分类" selectTit="选择IPC分类" :data="ipcTypes" class="mr-[20px]" @onSave="onSearch($event, 'ipcType')" />
            <DateSelect label="申请年" selectTit="选择起止年份" @onSave="onSearch($event, 'applicationYear')"/>
            <DateSelect label="公开年" selectTit="选择起止年份" @onSave="onSearch($event, 'publicYear')"/>
            <CheckboxSelect label="专利有效性" selectTit="选择专利有效性" :data="patentValiditys" class="mr-[20px]" @onSave="onSearch($event, 'patentValidity')" />
            <CheckboxSelect label="专利类型" selectTit="选择专利类型" :data="patentTypes" class="mr-[20px]" @onSave="onSearch($event, 'patentType')" />
        </div>
        <EditDialog v-if="infoVisible" v-model:visible="infoVisible" @onSave="onSave" />     
    </div>
</template>
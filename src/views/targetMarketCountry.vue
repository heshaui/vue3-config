<script setup lang="ts">
    const activeChart = ref('bar')
    const tableData = ref([
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'}

    ])
    const columns = ref([
        { prop: 'index', label: '排名'},
        { prop: 'age', label: '国家' },
        { prop: 'address', label: '申请量' }
    ])
    const inventorsData = ['章三', '里斯', '王武', '周六', '就看', '肯德基', '大家放']
    const inventors = ref(inventorsData)
    const chartOption:any = reactive({
        type: 'bar',
        xname: '发明人',
        yname: '专利数量',
        barname: '专利数量',
        xdata: inventors,
        ydata: [10, 20, 30, 40, 50, 60, 70],
        horizontal: true
    })
</script>

<template>
    <Page pageTitle="目标市场国分析" subTit="分析对象在各个国家或地区的专利数量分布情况">
        <div class="h-[40px]">
            <PopoverSelect :data="inventorsData" :default-selections="inventorsData" @onChange="sels => inventors = sels" />
        </div>
        <WorldMap />
        <el-divider/>
        <my-table :data="tableData" :tableColumns="columns" />
    </Page>
</template>
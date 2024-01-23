<script setup lang="ts">
    const tableData = ref([
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'}

    ])
    const columns = ref([
        { prop: 'index', label: '排名'},
        { prop: 'age', label: '发明人' },
        { prop: 'address', label: '专利量' }
    ])
    const inventorsData = ['章三', '里斯', '王武', '周六', '就看', '肯德基', '大家放']
    const inventors = ref(inventorsData)
    const chartOption:any = reactive({
        xname: '发明人',
        yname: '专利数量',
        barname: '专利数量',
        xdata: inventors,
        ydata: [10, 20, 30, 40, 50, 60, 70],
        horizontal: true
    })
</script>

<template>
    <Page pageTitle="发明人分析" subTit="分析该技术领域内的主要发明人。有助于评估特定技术领域内的最佳人才并助力公司人才引进。">
        <div class="h-[40px]">
            <PopoverSelect :data="inventorsData" :default-selections="inventorsData" @onChange="sels => inventors = sels" />
        </div>
        <HistogramChart :chart-option="chartOption"/>
        <el-divider/>
        <my-table :data="tableData" :tableColumns="columns" />
    </Page>
</template>

<style scoped>
</style>
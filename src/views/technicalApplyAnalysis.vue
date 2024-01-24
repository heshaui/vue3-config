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
        { prop: 'age', label: '申请人' },
        { prop: 'address', label: '专利量' }
    ])
    const inventorsData = ['章三', '里斯', '王武', '周六', '就看', '肯德基', '大家放']
    const inventors = ref(inventorsData)
    const chartOption:any = reactive({
        type: 'bar',
        xname: '申请人',
        yname: '专利数量',
        barname: '专利数量',
        xdata: inventors,
        ydata: [10, 20, 30, 40, 50, 60, 70],
        horizontal: true
    })
    const onChartChange = (type:string) => {
        activeChart.value = type
        chartOption.type = type
        chartOption.horizontal = type === 'bar' ? true : false
    }
</script>

<template>
    <Page pageTitle="申请人分析" subTit="分析该技术领域主要申请人申请情况。可以帮助发现创新成果积累较多的专利申请人，并据此进一步分析其专利竞争实力。">
        <div class="h-[40px]">
            <i class="iconfont icon-bar text-[20px] mr-[10px] cursor-pointer" :class="activeChart ==='bar' ? 'text-[#409EFF]' : ''" @click="onChartChange('bar')"></i>
            <i class="iconfont icon-line text-[20px] cursor-pointer" :class="activeChart ==='line' ? 'text-[#409EFF]' : ''" @click="onChartChange('line')"></i>
            <PopoverSelect :data="inventorsData" :default-selections="inventorsData" @onChange="sels => inventors = sels" />
        </div>
        <HistogramChart :chart-option="chartOption"/>
        <el-divider/>
        <my-table :data="tableData" :tableColumns="columns" />
    </Page>
</template>

<style scoped>
</style>
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
        { prop: 'age', label: '公开公告号' },
        { prop: 'address', label: '专利家族量' }
    ])
    const typeData = ref(['章三', '里斯', '王武', '周六', '就看', '肯德基', '大家放'])
    const barData = ref([10, 20, 30, 40, 50, 60, 70])
    const pieData:any = ref([])
    const chartOption:any = reactive({
        type: 'bar',
        xname: '公开公告号',
        yname: '专利家族量',
        barname: '专利家族量',
        xdata: typeData.value,
        ydata: barData,
        horizontal: true
    })
    const setPieData = () => {
        pieData.value = typeData.value.map((item, index) => ({ name: item, value: barData.value[index] }))
    }
    const onChartChange = (type:string) => {
        activeChart.value = type
    }
    onMounted(() => {
        setPieData()
    })
</script>

<template>
    <Page pageTitle="最多引用专利" subTit="分析该技术领域内的重点专利人，分析依据为专利被引用的频率来判断专利的重要性。">
        <div class="h-[40px]">
            <i class="iconfont icon-bar text-[20px] mr-[10px] cursor-pointer" :class="activeChart ==='bar' ? 'text-[#409EFF]' : ''" @click="onChartChange('bar')"></i>
            <i class="iconfont icon-pie text-[20px] cursor-pointer" :class="activeChart ==='pie' ? 'text-[#409EFF]' : ''" @click="onChartChange('pie')"></i>
        </div>
        <HistogramChart v-show="activeChart==='bar'" :chart-option="chartOption"/>
        <Pie v-if="activeChart==='pie'" :data="pieData"/>
        <el-divider/>
        <my-table :data="tableData" :tableColumns="columns" />
    </Page>
</template>

<style scoped>
</style>
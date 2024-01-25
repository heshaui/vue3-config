<script setup lang="ts">
    const activeChart = ref('pie')
    const tableData = ref([
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'}

    ])
    const columns = ref([
        { prop: 'age', label: '有效' },
        { prop: 'address', label: '失效' },
        { prop: 'age', label: 'PCT指定期内' },
        { prop: 'address', label: 'PCT指定期满' },
        { prop: 'age', label: '审中' },
        { prop: 'address', label: '未确认' }
    ])
    const typeData = ref(['有效', '失效', 'PCT指定期内', 'PCT指定期满', '审中', '未确认'])
    const barData = ref([10, 20, 30, 40, 50, 60])
    const pieData:any = ref([])
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
    <Page pageTitle="简单法律状态分析" subTit="分析该技术领域简单法律状态分析">
        <div class="h-[40px]">
            <i class="iconfont icon-pie text-[20px] mr-[10px] cursor-pointer" :class="activeChart ==='pie' ? 'text-[#409EFF]' : ''" @click="onChartChange('pie')"></i>
            <i class="iconfont icon-ring-chart text-[20px] cursor-pointer" :class="activeChart ==='ring' ? 'text-[#409EFF]' : ''" @click="onChartChange('ring')"></i>
        </div>
        <Pie :data="pieData" :annular="activeChart==='ring'" />
        <el-divider/>
        <my-table :data="tableData" :tableColumns="columns" />
    </Page>
</template>

<style scoped>
</style>
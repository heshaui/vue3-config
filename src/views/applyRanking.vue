<script setup lang="ts">
    const activeChart = ref('pie')
    const tableData = ref([
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'}

    ])
    const columns = ref([
        { prop: 'index', label: '排名'},
        { prop: 'age', label: '省' },
        { prop: 'address', label: '申请量' }
    ])
    const citys = ref(['北京', '上海', '广州', '深圳', '杭州', '南京', '成都'])
    const checkedCitys = ref(citys)
    const barData = ref([10, 20, 30, 40, 50, 60, 70])
    const pieData:any = ref([])
    const setPieData = () => {
        pieData.value = citys.value.map((item, index) => ({ name: item, value: barData.value[index] }))
    }
    onMounted(() => {
        setPieData()
    })
</script>

<template>
    <Page pageTitle="中国各省市申请排名" subTit="分析对象在中国省级行政区域的分布情况，仅统计中国专利。">
        <div class="h-[40px]">
            <PopoverSelect :data="citys" :default-selections="citys" @onChange="sels => checkedCitys = sels" />
        </div>
        <Pie :data="pieData" :annular="true" />
        <el-divider/>
        <my-table :data="tableData" :tableColumns="columns" />
    </Page>
</template>

<style scoped>
</style>
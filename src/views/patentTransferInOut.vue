<script setup lang="ts">
    import { useRoute } from 'vue-router'
    const route = useRoute()
    const pageType = route.query.type
    const pageTit = computed(() => {
        return pageType === 'in' ? '专利转入' : '专利转出'
    })
    const subTit = computed(() => {
        return pageType === 'in' ? '分析该公司专利购买历史，了解该公司向哪些权利人购买了专利情况，以及购买了哪些专利' : '分析该公司的专利转让去向，一定程度上可帮助了解该公司将放弃在哪些技术领域的研发资源投入。'
    })
    const tableData = ref([
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'}

    ])
    const columns = ref([
        { prop: 'index', label: '排名'},
        { prop: 'age', label: '转让人' },
        { prop: 'address', label: '专利量' }
    ])
    const inventorsData = ['章三', '里斯', '王武', '周六', '就看', '肯德基', '大家放']
    const inventors = ref(inventorsData)
    const chartOption:any = reactive({
        xname: '转让人',
        yname: '专利数量',
        barname: '专利数量',
        xdata: inventors,
        ydata: [10, 20, 30, 40, 50, 60, 70],
        horizontal: true
    })
</script>

<template>
    <Page :pageTitle="pageTit" :subTit="subTit">
        <HistogramChart :chart-option="chartOption"/>
        <el-divider/>
        <my-table :data="tableData" :tableColumns="columns" />
    </Page>
</template>

<style scoped>
</style>
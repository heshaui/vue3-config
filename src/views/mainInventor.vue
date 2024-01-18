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
</script>

<template>
    <Page pageTitle="发明人分析" subTit="分析该技术领域内的主要发明人。有助于评估特定技术领域内的最佳人才并助力公司人才引进。">
        <HistogramChart />
        <el-divider/>
        <my-table :data="tableData" :tableColumns="columns" />
    </Page>
</template>

<style scoped>
</style>
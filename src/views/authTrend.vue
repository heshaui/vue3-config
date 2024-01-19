<script setup lang="ts">
    let tableColumns = ref([
        {prop: 'year', label: '申请年'},
        {prop: 'count', label: '专利申请量'},
        {prop: 'authCount', label: '专利授权量'}
    ])

    let tableData = ref([
        { year: '2021', count: 100, authCount: 80 },
        { year: '2022', count: 300, authCount: 240 },
        { year: '2023', count: 200, authCount: 180 },
        { year: '2024', count: 100, authCount: 40 },
    ])
</script>

<template>
    <Page
        pageTitle="申请授权趋势分析"
        subTit="分析该技术领域的专利申请和授权趋势，通过申请趋势可以从宏观的层面把握该技术领域在各时期的专利申请热度变化。其中授权率表示专利申请最终获得授权的成功率。">
        <DoubleLineBar />
        <MyTable :tableColumns="tableColumns" :data="tableData" />
    </Page>
</template>

<style scoped>
</style>
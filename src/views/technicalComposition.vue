<script setup lang="ts">
    let tableColumns = ref([
        {prop: 'year', label: '分类号'},
        {prop: 'count', label: '定义'},
        {prop: 'authCount', label: '专利量'},
        {prop: 'proportion', label: '占比'}
    ])

    let tableData = ref([
        { year: '2021', count: 100, authCount: 80, proportion: '20%' },
        { year: '2022', count: 300, authCount: 240, proportion: '20%' },
        { year: '2023', count: 200, authCount: 180, proportion: '20%' },
        { year: '2024', count: 100, authCount: 40, proportion: '20%' },
    ])
</script>

<template>
    <Page
        pageTitle="技术构成"
        subTit="分析该技术领域主要技术分支的专利分布量。通过该分析可帮助了解各技术分支的创新热度。">
        <TreeMap />
        <MyTable :tableColumns="tableColumns" :data="tableData" />
    </Page>
</template>

<style scoped>
</style>
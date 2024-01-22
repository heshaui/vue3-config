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
        pageTitle="发明人团队分析"
        subTit="发明人研发方向分析。有助于评估特定技术领域内的最佳人才并助力公司人才引进。">
        <Graph />
        <MyTable :tableColumns="tableColumns" :data="tableData" />
    </Page>
</template>

<style scoped>
</style>
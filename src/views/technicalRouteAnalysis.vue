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
        pageTitle="技术线路分析"
        subTit="分析企业专利关键词热度，了解该企业技术路线方向。">
        <ComplexBar />
        <MyTable :tableColumns="tableColumns" :data="tableData" />
    </Page>
</template>

<style scoped>
</style>
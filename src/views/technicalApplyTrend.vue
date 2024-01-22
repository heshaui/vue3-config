<script setup lang="ts">
    let tableColumns = ref([
        {prop: 'year', label: '地区'},
        {prop: 'count', label: '2002'},
        {prop: 'authCount', label: '2003'}
    ])

    let tableData = ref([
        { year: '广东', count: 100, authCount: 80 },
        { year: '北京', count: 300, authCount: 240 },
        { year: '江苏', count: 200, authCount: 180 },
        { year: '日本', count: 100, authCount: 40 },
    ])
</script>

<template>
    <Page
        pageTitle="技术分支申请趋势"
        subTit="分析企业在不同技术方向专利申请量的分布情况和发展趋势。分析各阶段的技术分布情况，有助于了解特定时期的重要技术分布，挖掘近期的热门技术方向和未来的发展动向">
        <Line />
        <MyTable :tableColumns="tableColumns" :data="tableData" />
    </Page>
</template>

<style scoped>
</style>
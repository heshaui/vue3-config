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
        pageTitle="中国各省市申请趋势"
        subTit="各省市专利申请量的发展趋势，仅统计中国专利。通过该分析可以掌握各省市在不同时期内专利技术储备的数量及技术创新活跃程度的发展变化趋势。">
        <Line />
        <MyTable :tableColumns="tableColumns" :data="tableData" />
    </Page>
</template>

<style scoped>
</style>
<script setup lang="ts">
    let tableColumns = ref([
        {prop: 'year', label: '国家'},
        {prop: 'count', label: '2002'},
        {prop: 'authCount', label: '2003'}
    ])

    let tableData = ref([
        { year: '美国', count: 100, authCount: 80 },
        { year: '中国', count: 300, authCount: 240 },
        { year: '韩国', count: 200, authCount: 180 },
        { year: '日本', count: 100, authCount: 40 },
    ])
</script>

<template>
    <Page
        pageTitle="技术来源国申请趋势"
        subTit="分析对象在全球不同国家或地区中专利申请量的发展趋势。通过该分析可以了解专利技术在不同国家或地区的起源和发展情况，对比各个时期内不同国家和地区的技术活跃度，以便分析专利在全球布局情况，预测未来的发展趋势，为制定全球的市场竞争或风险防御战略提供参考。公国国家年度及公开国家专利申请量。">
        <Line />
        <MyTable :tableColumns="tableColumns" :data="tableData" />
    </Page>
</template>

<style scoped>
</style>
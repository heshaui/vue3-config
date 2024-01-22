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
        pageTitle="地域布局趋势分析"
        subTit="分析企业在主要目标市场的申请趋势，可以了解企业在不同时间段主要关注的目标市场变化情况。">
        <Line />
        <MyTable :tableColumns="tableColumns" :data="tableData" />
    </Page>
</template>

<style scoped>
</style>
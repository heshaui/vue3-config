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
        pageTitle="新兴技术分析"
        subTit="企业近5年才开始申请或答复新增申请的技术领域">
        <Bubble />
        <MyTable :tableColumns="tableColumns" :data="tableData" />
    </Page>
</template>

<style scoped>
</style>
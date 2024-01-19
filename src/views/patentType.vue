<script setup lang="ts">
    let tableColumns = ref([
        {prop: 'year', label: '发明'},
        {prop: 'count', label: '实用新型'},
        {prop: 'authCount', label: '外观专利'}
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
        pageTitle="专利类型"
        subTit="分析该技术领域申请人专注于保护技术创新的功能还是外观。其中，发明专利相对于实用新型的占比，反映该技术领域的创新程度高低。">
        <Pie annular />
        <MyTable :tableColumns="tableColumns" :data="tableData" />
    </Page>
</template>

<style scoped>
</style>
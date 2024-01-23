<script setup lang="ts">
    let tableColumns = ref([
        {prop: 'year', label: '申请年'},
        {prop: 'count', label: '专利申请量'}
    ])

    let tableData = ref([
        { year: '2021', count: 100},
        { year: '2022', count: 300},
        { year: '2023', count: 200},
        { year: '2024', count: 100},
    ])
</script>

<template>
    <Page :layout="false">
        <h3 class="text-center text-[30px] pt-[30px] mb-[30px]">[手机]专利分析报告</h3>
        <section>
            <p class="text-[20px] font-bold mb-[20px]">申请趋势分析</p>
            <p class="mb-[20px]">分析该技术领域的专利申请和授权趋势，通过申请趋势可以从宏观的层面把握该技术领域在各时期的专利申请热度变化。其中授权率表示专利申请最终获得授权的成功率。</p>
            <hr />
            <Bar class="w-[800px] my-[20px] mx-auto"
                :axis="['2012', '2013', '2014', '2015', '2016', '2017', '2018']"
                :data="[100, 200, 500, 200, 100, 400, 300]"
            />
            <MyTable :tableColumns="tableColumns" :data="tableData" />
        </section>

        <section class="mt-[40px]">
            <p class="text-[20px] font-bold mb-[20px]">公开趋势分析</p>
            <p class="mb-[20px]">分析该技术领域的专利申请公开趋势，通过公开趋势可以从宏观的层面把握该技术领域在各时期的专利申请热度变化。</p>
            <hr />
            <Bar class="w-[800px] my-[20px] mx-auto"
                :axis="['2012', '2013', '2014', '2015', '2016', '2017', '2018']"
                :data="[100, 200, 500, 200, 100, 400, 300]"
            />
            <MyTable :tableColumns="tableColumns" :data="tableData" />
        </section>
    </Page>
</template>

<style scoped>
</style>
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

        <section class="mt-[40px]">
            <p class="text-[20px] font-bold mb-[20px]">专利类</p>
            <p class="mb-[20px]">分析该技术领域申请人专注于保护技术创新的功能还是外观。其中，发明专利相对于实用新型的占比，反映该技术领域的创新程度高低。</p>
            <hr />
            <Pie />
            <MyTable :tableColumns="tableColumns" :data="tableData" />
        </section>

        <section class="mt-[40px]">
            <p class="text-[20px] font-bold mb-[20px]">技术构成分析-小组</p>
            <p class="mb-[20px]">分析该技术领域主要技术分支的专利分布量。通过该分析可帮助了解各技术分支的创新热度。</p>
            <hr />
            <TreeMap />
            <MyTable :tableColumns="tableColumns" :data="tableData" />
        </section>

        <section>
            <p class="text-[20px] font-bold mb-[20px]">申请人排名分析</p>
            <p class="mb-[20px]">分析该技术领域申请人的专利数量的排名情况。可以帮助发现创新成果积累较多的专利申请人，并据此进一步分析其专利竞争实力。</p>
            <hr />
            <Bar class="w-[800px] my-[20px] mx-auto"
                horizontal
                :axis="['2012', '2013', '2014', '2015', '2016', '2017', '2018']"
                :data="[100, 200, 500, 200, 100, 400, 300]"
            />
            <MyTable :tableColumns="tableColumns" :data="tableData" />
        </section>

        <section>
            <p class="text-[20px] font-bold mb-[20px]">发明人排名分析</p>
            <p class="mb-[20px]">分析该技术领域内的主要发明人。有助于评估特定技术领域内的最佳人才并助力公司人才引进。</p>
            <hr />
            <Bar class="w-[800px] my-[20px] mx-auto"
                horizontal
                :axis="['2012', '2013', '2014', '2015', '2016', '2017', '2018']"
                :data="[100, 200, 500, 200, 100, 400, 300]"
            />
            <MyTable :tableColumns="tableColumns" :data="tableData" />
        </section>
    </Page>
</template>

<style scoped>
</style>
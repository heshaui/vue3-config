<script setup lang="ts">
    import { useRoute } from 'vue-router'
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
    let pageTitle = ref(['重要地域技术分支申请情况', '重要技术分支主要申请人分布', '重要技术地域分布'])
    let subTit = ref([
        '分析对象在不同技术方向专利申请量的分布情况和发展趋势。数据范围IPC分类，申请量，（公开国前五-前十）',
        '申请人在各技术领域的专利分布情况。通过该分析可以从技术出发，研究主要申请人侧重的技术领域、技术方向和技术实力。',
        '分析对象在不同技术方向专利申请量的分布情况和发展趋势。分析各阶段的技术分布情况，有助于了解特定时期的重要技术分布，挖掘近期的热门技术方向和未来的发展动向'
    ])
    /**
     * 这个页面在以下三个场景下通用, 使用type 区分
     * 0: 重要地域技术分支申请情况
     * 1: 重要技术分支主要申请人分布
     * 2: 重要技术地域分布
     */
    let type = ref(0)

    const route = useRoute()

    onMounted(() => {
        if (route.query.type) {
            type.value = parseInt(route.query.type.toString())
        }
    })

</script>

<template>
    <Page
        :pageTitle="pageTitle[type]"
        :subTit="subTit[type]">
        <Bubble />
        {{ type }}
        <MyTable :tableColumns="tableColumns" :data="tableData" />
    </Page>
</template>

<style scoped>
</style>
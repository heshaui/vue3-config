<script setup lang="ts">
    import { useRoute } from 'vue-router'
    const route = useRoute()
    const pageType = route.query.type
    const pageTit = computed(() => {
        return pageType === 'country' ? '目标市场国分析' : '地域布局趋势分析'
    })
    const subTit = computed(() => {
        return pageType === 'country' ? '分析对象在各个国家或地区的专利数量分布情况' : '分析该公司的专利分析企业在主要目标市场的申请趋势，可以了解企业在不同时间段主要关注的目标市场变化情况。转让去向，一定程度上可帮助了解该公司将放弃在哪些技术领域的研发资源投入。'
    })
    const tableData = ref([
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'},
        { index: 1, age: '张三', address: '10'}

    ])
    const columns = ref([
        { prop: 'index', label: '排名'},
        { prop: 'age', label: '国家' },
        { prop: 'address', label: '申请量' }
    ])
    const inventorsData = ['章三', '里斯', '王武', '周六', '就看', '肯德基', '大家放']
    const inventors = ref(inventorsData)
</script>

<template>
    <Page :pageTitle="pageTit" :subTit="subTit">
        <div class="h-[40px]">
            <PopoverSelect :data="inventorsData" :default-selections="inventorsData" @onChange="sels => inventors = sels" />
        </div>
        <WorldMap />
        <el-divider/>
        <my-table :data="tableData" :tableColumns="columns" />
    </Page>
</template>
<script setup lang="ts">
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
    <Page pageTitle="发明人活跃时间分析" subTit="发明人活跃时间分析。有助于评估特定技术领域内的最佳人才并助力公司人才引进。">
        <div class="h-[40px]">
            <PopoverSelect :data="inventorsData" :default-selections="inventorsData" @onChange="sels => inventors = sels" />
        </div>
        <WorldMap />
        <el-divider/>
        <my-table :data="tableData" :tableColumns="columns" />
    </Page>
</template>
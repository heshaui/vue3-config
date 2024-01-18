<script setup lang="ts">
    const cards = [
        { name: '专利总量', count: 50 },
        { name: 'PCT申请', count: 50 },
        { name: '发明设计人', count: 50, unit: '人' },
        { name: '有效专利', count: 50 },
        { name: '申请中专利', count: 50 },
        { name: '失效专利', count: 50 }
    ]
</script>

<template>
    <Page pageTitle="企业报告概览" subTit="分析该公司总体专利布局的数量情况。发明专利授权的数量可以在一定程度上反映该公司的技术实力。">
        <el-row :gutter="12">
            <el-col v-for="card of cards" :key="card.name" :span="4">
                <el-card shadow="hover" class="bg-[#e6eefe] rounded-tr-[30px] text-center"> 
                    <div>{{ card.name }}</div>
                    <div>
                        <span class="text-[20px] font-medium">{{ card.count }}</span> 
                        {{ card.unit ? card.unit : '件'  }}
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </Page>
</template>

<style scoped>
</style>
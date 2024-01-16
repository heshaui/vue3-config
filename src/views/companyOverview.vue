<script setup lang="ts">
    const cards = [
        { name: '专利总量', count: 50 },
        { name: 'PCT申请', count: 50 },
        { name: '发明设计人', count: 50 },
        { name: '有效专利', count: 50 },
        { name: '申请中专利', count: 50 },
        { name: '失效专利', count: 50 }
    ]
</script>

<template>
    <Page pageTitle="企业报告概览" subTit="分析该公司总体专利布局的数量情况">
        <el-row :gutter="12">
            <el-col v-for="card of cards" :key="card.name" :span="4">
                <el-card shadow="hover"> 
                    {{ card.name }}
                    <span>{{ card.count }} 件</span>
                </el-card>
            </el-col>
        </el-row>
    </Page>
</template>

<style scoped>
</style>
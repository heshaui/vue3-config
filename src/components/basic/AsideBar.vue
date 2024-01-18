<script setup lang="ts">
    const menus = [
        { name: '企业分析概览' },
        {
            name: '专利概况',
            children: [
                { name: '非付费地方的' },
                { name: '非付费地方的' },
                { name: '非付费地方的' },
                {name: '非付费地方的'}
                
            ]
        },
        {
            name: '专利概况',
            children: [
                { name: '非付费地方的' }
            ]
        },
        
    ]
    const queryValue = ref('')
</script>

<template>
    <aside class="rounded-md border border-[#ccc] border-solid">
        <h3 class="text-center text-lg/10">我的检索分析报告</h3>
        <el-select v-model="queryValue" class="mb-1">
            <el-option label="全部" value="" />
        </el-select>
        <el-button type="primary" class="w-full mb-1">华为科技</el-button>
        <el-menu
            class="rounded-b-md border-noen border-0"
            default-active="0"
            :show-timeout="100"
        >
        <template v-for="(menu, index) of menus" :key="menu.name">
            <el-sub-menu v-if="menu.children" :index="`${index}`">
                <template #title>
                    <span>{{ menu.name }}</span>
                </template>
                <el-menu-item v-for="(child, cIndex) of menu.children" :key="child.name" :index="`${index}-${cIndex}`">{{ child.name }}</el-menu-item>
            </el-sub-menu>
            <el-menu-item v-else :index="`${index}`">
                  <template #title>{{ menu.name }}</template>
            </el-menu-item>
        </template>
        
      </el-menu>
    </aside>
</template>
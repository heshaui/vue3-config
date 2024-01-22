<script setup lang="ts">
    const menus = [
        {
            name: '北京遥体科技有限公司',
            children: [
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
                }
            ]
        }
    ]
    const queryValue = ref('all')
</script>

<template>
    <aside class="rounded-md border border-[#ccc] border-solid p-[10px]">
        <h3 class="text-center text-[18px] font-semibold mb-[10px] text-[#333]">我的检索分析报告</h3>
        <el-select v-model="queryValue" placeholder="请选择" size="large" class="mb-[10px]">
            <el-option label="全部报告" value="all" />
            <el-option label="技术全景分析报告" :value="1" />
            <el-option label="企业分析报告" :value="2" />
            <el-option label="竞争报告" :value="3" />
        </el-select>
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
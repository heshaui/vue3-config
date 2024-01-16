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
                { name: '非付费地方的' },
                { name: '非付费地方的' },
                { name: '非付费地方的' },
                {name: '非付费地方的'}
                
            ]
        },
        
    ]
    const queryValue = ref('')
</script>

<template>
    <aside class="round border border-gray-300 border-solid">
        <h3 class="text-center text-lg/10">我的检索分析报告</h3>
        <el-select v-model="queryValue" class="mb-1">
            <el-option label="全部" value="" />
        </el-select>
        <el-button type="primary" class="w-full mb-1">华为科技</el-button>
        <el-menu
            class="el-menu-vertical-demo"
            default-active="2"
        >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </aside>
</template>
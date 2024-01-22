<script setup lang="ts">
    defineProps({
        pageTitle: String,
        subTit: String
    })
</script>

<template>
    <div>
        <h3 class="text-[16px] font-blod my-[10px]">{{ pageTitle }}</h3>
        <p class="text-[14px]/[30px]">{{ subTit }}</p>
        <el-divider class="my-[10px]"/>
    </div>
</template>

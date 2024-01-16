<script setup lang="ts">
    defineProps({
        pageTitle: String,
        subTit: String
    })
</script>

<template>
    <div>
        <h3 class="text-xl/[20px] mb-[10px]">{{ pageTitle }}</h3>
        <p class="text-sm/[30px]">{{ subTit }}</p>
        <el-divider style="margin-top: 10px;"/>
    </div>
</template>

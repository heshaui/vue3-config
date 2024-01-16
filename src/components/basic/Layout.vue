<script setup lang="ts">
</script>

<template>
    <div class="basic-layout">
        <div class="main-content">
            <search-bar class="search-bar"/>
            <div class="page-content">
                <page-header v-bind="$attrs"/>
                <slot />
            </div>
        </div>
        <AsideBar class="aside-bar" />
    </div>
</template>

<style scoped lang="scss">
.basic-layout {
    height: 100%;
    display: flex;
    .main-content {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        .page-content {
            flex: 1 1 auto;
            padding: 10px 20px;
        }
    }
    .aside-bar {
        width: 240px;
        height: 100%;
        flex: 0 0 atuo;
        margin-left: 20px;
    }
}
</style>
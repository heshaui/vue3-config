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
    padding: 10px 0;
    display: flex;
    .main-content {
        height: 100%;
        overflow-y: auto;
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        .page-content {
            flex: 1 1 auto;
            padding: 10px 20px;
        }
        &::-webkit-scrollbar {
            width: 0;
        }
        &::-ms-scrollbar {
            width: 0;
        }
    }
    .aside-bar {
        width: 270px;
        height: 100%;
        flex: 0 0 auto;
        margin-left: 20px;
    }
}
</style>
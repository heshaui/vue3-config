<script setup lang="ts">
    
</script>

<template>
    <div class="basic-page">
        <Layout v-bind="$attrs">
            <slot></slot>
        </Layout>
    </div>
</template>

<style scoped lang="scss">
.basic-page {
    width: 85%;
    margin: 0 auto;
    min-width: 1200px;
}
</style>
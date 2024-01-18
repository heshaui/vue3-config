<script setup lang="ts">
    defineProps({
        layout: {
            type: Boolean,
            default: true
        }
    })
</script>

<template>
    <div class="basic-page">
        <Layout v-if="layout" v-bind="$attrs">
            <slot></slot>
        </Layout>
        <slot v-else></slot>
    </div>
</template>

<style scoped lang="scss">
.basic-page {
    width: 1100px;
    margin: 0 auto;
    min-width: 1100px;
}
</style>
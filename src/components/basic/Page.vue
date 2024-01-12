<script setup lang="ts">

</script>

<template>
    <div class="basic-page">
        <div class="inner">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.basic-page {
    width: 100%;

    .inner {
        background: #000;
    }
}
</style>
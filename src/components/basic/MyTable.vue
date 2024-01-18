<script setup lang="ts">
    const props = defineProps({
        tableColumns: { 
            type: Array,
            default: () => []
        }
    })
    const initColumns = () => {
        return props.tableColumns.map((column: any) => {
            return {
                ...column,
                // 添加默认的列宽
                minWidth: column.minWidth || '100px',
                align: column.align || 'center'
            }
        })
    }
    const columns = computed(() => initColumns())
</script>

<template>
    <el-table 
        v-bind="$attrs" 
        stripe border
    >
        <el-table-column v-for="(column, index) in columns" :key="index" v-bind="column"></el-table-column>
    </el-table>
</template>

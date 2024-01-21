<script setup lang="ts">
    const props = defineProps({
        label: String,
        selectTit: String,
        data: {
            type: Array,
            default: () => []
        }
    })
    const emit = defineEmits(['onSave'])
    
    const checkAll = ref(true)
    const isIndeterminate = ref(false)
    const allValue = props.data.map((item:any) => item.value)
    const checkedData = ref(allValue)
    
    const handleCheckAllChange = (val: boolean) => {
        checkedData.value = val ? allValue : []
        isIndeterminate.value = false
    }
    const handlecheckedDataChange = (value: string[]) => {
        const checkedCount = value.length
        checkAll.value = checkedCount === props.data.length
        isIndeterminate.value = checkedCount > 0 && checkedCount < props.data.length
    }
    const onSave = () => {
        emit('onSave', checkedData.value)
    }
</script>

<template>
    <el-popover placement="bottom-start" :width="200" trigger="click" @hide="onSave">
        <template #reference>
            <el-select :placeholder="label" :disabled="true" class="check-select mr-[20px]"></el-select>
        </template>
        <h3 class="text-[16px] mb-[10px] text-[#333]">{{ selectTit }}</h3>
        <el-checkbox
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            class="mb-[10px]"
            @change="handleCheckAllChange"
            >全选</el-checkbox
        >
        <el-checkbox-group
            v-model="checkedData"
            @change="handlecheckedDataChange"
        >
            <el-checkbox v-for="item of data" :key="item.value" :label="item.value" class="block">{{
                item.label
            }}</el-checkbox>
        </el-checkbox-group>
    </el-popover>
</template>

<style lang="scss">
.check-select.el-select {
    .el-select__wrapper.is-disabled {
        background: #fff;
        cursor: pointer;
        .el-select__placeholder {
            color: #333;
        }
        .el-select__caret {
            cursor: pointer;
        }
    }
    
}
</style>
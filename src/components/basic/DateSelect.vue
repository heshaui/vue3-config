<script setup lang="ts">
    import DatePickerEnhanced from 'datepicker-enhanced'
    import 'datepicker-enhanced/dist/style.css'
    import dayjs from 'dayjs'
    const props = defineProps({
        label: String,
        selectTit: String
    })
    const emit = defineEmits(['onSave'])

    const yearRange = ref(20)
    const years:any = ref([])
    const initYears = () => {
        const endYear = dayjs()
        const startYear = dayjs().subtract(yearRange.value, 'year')
        years.value = [startYear, endYear]
    }
    const onRangeChange = (range: any) => {
        yearRange.value = range
        initYears()
    }
    const onSave = () => {
        const times = [dayjs(years.value[0]).format('YYYY'), dayjs(years.value[1]).format('YYYY')]
        emit('onSave', times)
    }
    onMounted(() => {
        onRangeChange(20)
    })
</script>

<template>
    <el-popover placement="bottom-start" :width="325" trigger="click" @hide="onSave">
        <template #reference>
            <el-select :placeholder="label" :disabled="true" class="check-select mr-[20px]"></el-select>
        </template>
        <h3 class="text-[16px] mb-[10px] text-[#333]">{{ selectTit }}</h3>
        <div class="mb-[10px]">
            <el-button link @click="onRangeChange(5)">近5年</el-button>
            <el-button link @click="onRangeChange(10)">近10年</el-button>
            <el-button link @click="onRangeChange(20)">近20年</el-button>
        </div>
        <DatePickerEnhanced
            v-model="years"
            type="yearrange"
            value-format="YYYY"
            range-separator="至"
            start-placeholder="开始年份"
            end-placeholder="结束年份"
        />
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
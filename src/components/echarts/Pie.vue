<script setup lang="ts">
let dom = ref(null)
const { proxy } = getCurrentInstance() as any

const props = defineProps({
    title: String,
    // 是否环形
    annular: Boolean,
    data: Array
})

const option = {
    tooltip: {
        trigger: 'item'
    },
    series: [
        {
            // name: 'Access From',
            type: 'pie',
            radius: props.annular ? ['40%', '70%'] : '50%',
            data: props.data ?? [
                { value: 1048, name: 'PCT' },
                { value: 735, name: '发明' },
                { value: 580, name: '实用新型' },
                { value: 484, name: '外观' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

onMounted(() => {
    let chart = proxy.$echarts.init(dom.value);
    chart.setOption(option)
})

</script>

<template>
    <div>
        <h4 class="text-[20px] font-bold text-center">{{ title }}</h4>
        <div ref="dom" class="w-[100%] h-[400px]"></div>
    </div>
</template>

<style scoped lang="scss">

</style>
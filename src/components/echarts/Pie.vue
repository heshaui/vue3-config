<script setup lang="ts">
let dom = ref(null)
const { proxy } = getCurrentInstance()

defineProps({
    title: String
})

const options = {
    tooltip: {
        trigger: 'item'
    },
    // legend: {
    //     orient: 'vertical',
    //     left: 'left'
    // },
    series: [
        {
            // name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
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
    chart.setOption(options)
})

</script>

<template>
    <h4 class="text-[20px] font-bold text-center">{{ title }}</h4>
    <div ref="dom" class="w-[100%] h-[400px]"></div>
</template>

<style scoped lang="scss">

</style>
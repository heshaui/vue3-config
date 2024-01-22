<script setup lang="ts">
let dom = ref(null)
const { proxy } = getCurrentInstance() as any

defineProps({
    title: String
})

const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
        type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
            data: ['专利申请', '专利授权', '授权占比']
    },
    xAxis: [
        {
            type: 'category',
            data: ['2000', '2005', '2008', '2010', '2013', '2015', '2020'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '专利数量',
            min: 0,
            max: 600,
            interval: 60,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '授权占比',
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [
        {
            name: '专利申请',
            type: 'bar',
            barWidth: '60%',
            tooltip: {
                valueFormatter: function (value: string) {
                    return value;
                }
            },
            data: [100, 200, 300, 500, 300, 400, 200]
        },
        {
            name: '专利授权',
            type: 'bar',
            barWidth: '40%',
            barGap: '-82%',
            tooltip: {
                valueFormatter: function (value: string) {
                    return value;
                }
            },
            data: [40, 120, 240, 300, 120, 260, 110]
        },
        {
            name: '授权占比',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value: string) {
                return value + '%';
                }
            },
            data: [10, 30, 40, 50, 80, 90, 40]
        }
    ]
};

onMounted(() => {
    let chart = proxy.$echarts.init(dom.value);
    chart.setOption(option)
})

</script>

<template>
    <h4 class="text-[20px] font-bold text-center">{{ title }}</h4>
    <div ref="dom" class="w-[100%] h-[400px]"></div>
</template>

<style scoped lang="scss">

</style>
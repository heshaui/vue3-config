<script setup lang="ts">
    const { proxy } = getCurrentInstance() as any
    const props = defineProps({
        chartData: Object
    })
    const chartRef = ref()
    const option = { 
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '5%',
            top: '0',
            containLabel: true
        },
        xAxis: [
            {
                type: 'value',
                axisLine:{
                    show:true
                },
                name: '专利数量',
                nameLocation: 'middle',
                nameGap: 30
            }
        ],
        yAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                },
                name: '发明人',
                nameLocation: 'middle',
                nameGap: 30
            }
        ],
        series: [
            {
                name: '专利数量',
                type: 'bar',
                barMaxWidth: 30,
                itemStyle: {
                    borderRadius: [0, 8, 8, 0]
                },
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]
    }
    const initChart = () => {
        const chart = proxy.$echarts.init(chartRef.value)
        chart.setOption(option)
    }

    onMounted(() => {
        initChart()
    })

</script>

<template>
    <div ref="chartRef" class="h-[500px]"></div>
</template>

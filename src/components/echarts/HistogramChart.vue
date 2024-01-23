<script setup lang="ts">
    const { proxy } = getCurrentInstance() as any
    const props = defineProps({
        chartOption: {
            type: Object,
            default: () => {}
        } // xname, yname, xdata, barname, yData, horizontal
    })
    const chartRef = ref()
    let chart:any = null
    const options:any = reactive({ 
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
            top: props.chartOption.horizontal ? '0' : '1%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: props.chartOption.xdata,
                axisTick: {
                    alignWithLabel: true
                },
                name: props.chartOption.xname,
                nameLocation: 'middle',
                nameGap: props.chartOption.horizontal ? 40 : 30
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine:{
                    show:true
                },
                name: props.chartOption.yname,
                nameLocation: 'middle',
                nameGap: 30
            }
        ],
        series: [
            {
                name: props.chartOption.barname,
                type: 'bar',
                barMaxWidth: 30,
                itemStyle: {
                    borderRadius: props.chartOption.horizontal ? [0, 8, 8, 0] : [8, 8, 0, 0]
                },
                data: props.chartOption.ydata
            }
        ]
    })
    
    // 横向柱状图 互换坐标轴
    const horizontalBarOption = () => {
        if (props.chartOption.horizontal) {
            let xAxis = options.xAxis
            let yAxis = options.yAxis
            options.xAxis = yAxis
            options.yAxis = xAxis
        }
    }

    // 初始化echarts实例
    const initChart = () => {
        chart = proxy.$echarts.init(chartRef.value)
        chart.setOption(options)
    }
    const resetOption = () => {
        props.chartOption.horizontal ?  options.yAxis[0].data = props.chartOption.xdata : options.xAxis[0].data = props.chartOption.xdata
        options.series[0].data = props.chartOption.ydata
    }
    watch(props.chartOption, ()=> {
        if (chart) {
            chart.dispose()
            // 重新渲染
            resetOption()
            initChart()
        }
    }, {deep: true})

    onMounted(() => {
        horizontalBarOption()
        initChart()
    })

</script>

<template>
    <div ref="chartRef" class="h-[500px]"></div>
</template>

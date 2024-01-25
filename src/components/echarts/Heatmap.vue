<script setup lang="ts">
    const { proxy } = getCurrentInstance() as any
    const props = defineProps({
        chartOption: {
            type: Object,
            default: () => {}
        }
    })
    const chartRef = ref()
    // chart实例
    let chart:any = null
    const option = {
        tooltip: {
            position: 'top'
        },
        grid: {
            left: '3%',
            right: '7%',
            bottom: '3%',
            top: '0',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: props.chartOption.xdata,
            splitArea: {
                show: true
            },
            axisTick: {
                show: false,
                alignWithLabel: true
            },
            axisLabel: {
                interval: 0,
                rotate: 45
            }
        },
        yAxis: {
            type: 'category',
            data: props.chartOption.ydata,
            splitArea: {
                show: true
            },
            axisTick: {
                show: false,
                alignWithLabel: true
            }
        },
        visualMap: {
            min: 0,
            max: 10,
            calculable: true,
            left: 'right',
            bottom: 'center'
        },
        series: [
            {
                name: props.chartOption.tipname,
                type: 'heatmap',
                data: props.chartOption.data,
                label: {
                    show: true
                },
                emphasis: {
                    itemStyle: {
                    shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }

    // 初始化echarts实例
    const initChart = () => {
        chart = proxy.$echarts.init(chartRef.value)
        chart.setOption(option)
    }
    // 重置配置项
    const resetOption = () => {
        option.yAxis.data = props.chartOption.ydata
        option.series[0].data = props.chartOption.data
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
        initChart()
    })

</script>

<template>
    <div ref="chartRef" class="h-[500px]"></div>
</template>

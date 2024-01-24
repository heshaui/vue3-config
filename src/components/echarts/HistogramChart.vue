<script setup lang="ts">
    const { proxy } = getCurrentInstance() as any
    const props = defineProps({
        chartOption: {
            type: Object,
            default: () => {}
        } // xname, yname, xdata, barname, yData, horizontal
    })
    const chartRef = ref()
    // chart实例
    let chart:any = null
    // x轴配置——类别配置
    const categoryOption = {
        type: 'category',
        data: props.chartOption.xdata,
        axisTick: {
            alignWithLabel: true
        },
        name: props.chartOption.xname,
        nameLocation: 'middle',
        nameGap: props.chartOption.horizontal ? 40 : 30
    }
    // y轴配置——值配置
    const valueOption = {
        type: 'value',
        axisLine:{
            show:true
        },
        name: props.chartOption.yname,
        nameLocation: 'middle',
        nameGap: 30
    }
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
        xAxis: [ categoryOption ],
        yAxis: [ valueOption ],
        series: [
            {
                name: props.chartOption.barname,
                type: props.chartOption.type ?? 'bar',
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
            options.xAxis[0] = valueOption
            options.yAxis[0] = categoryOption
        }
    }

    // 正常柱状图
    const normalBarOption = () => {
        options.xAxis[0] = categoryOption
        options.yAxis[0] = valueOption
    }

    // 初始化echarts实例
    const initChart = () => {
        chart = proxy.$echarts.init(chartRef.value)
        chart.setOption(options)
    }
    // 重置配置项
    const resetOption = () => {
        if (props.chartOption.horizontal) {
            horizontalBarOption()
            options.yAxis[0].data = props.chartOption.xdata
        } else {
            normalBarOption()
            options.xAxis[0].data = props.chartOption.xdata
        }
        categoryOption.nameGap = props.chartOption.horizontal ? 40 : 30
        options.series[0].data = props.chartOption.ydata
        options.series[0].type = props.chartOption.type
        options.series[0].itemStyle.borderRadius = props.chartOption.horizontal ? [0, 8, 8, 0] : [8, 8, 0, 0]
        options.grid.top = props.chartOption.horizontal ? '0' : '1%'
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

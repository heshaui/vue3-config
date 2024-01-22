<script setup lang="ts">
    let dom = ref(null)
    const {
        proxy
    } = getCurrentInstance() as any

    const props = defineProps({
        title: String,
        // 是否环形
        annular: Boolean
    })

    const option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
                name: 'Email',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: [820, 932, 901, 934, 1290, 1330, 1320]
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
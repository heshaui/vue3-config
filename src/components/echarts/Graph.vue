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
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
                show: true,
                position: 'right',
                formatter: '{b}'
            },
            edgeSymbol: ['circle'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                fontSize: 20
            },
            data: [{
                    name: 'Node 1',
                    x: 300,
                    y: 300
                },
                {
                    name: 'Node 2',
                    x: 800,
                    y: 300
                },
                {
                    name: 'Node 3',
                    x: 550,
                    y: 100
                },
                {
                    name: 'Node 4',
                    x: 550,
                    y: 500
                }
            ],
            links: [{
                    label: {
                        show: true
                    },
                    source: 'Node 1',
                    target: 'Node 3'
                },
                {
                    source: 'Node 2',
                    target: 'Node 3'
                },
                {
                    source: 'Node 2',
                    target: 'Node 4'
                },
                {
                    source: 'Node 1',
                    target: 'Node 4'
                }
            ],
            lineStyle: {
                opacity: 0.9,
                width: 1,
                curveness: 0
            }
        }]
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
<script setup lang="ts">
    let dom = ref(null)
    const {
        proxy
    } = getCurrentInstance() as any

    defineProps({
        title: String
    })

    function getLevelOption() {
        return [
            {
                upperLabel: {
                    show: false
                }
            },
            {
                itemStyle: {
                    borderColor: '#eee',
                    borderWidth: 5,
                    gapWidth: 1
                },
                emphasis: {
                    itemStyle: {
                        borderColor: '#ddd'
                    }
                }
            },
            {
                colorSaturation: [0.35, 0.5],
                itemStyle: {
                    borderWidth: 5,
                    gapWidth: 1,
                    borderColorSaturation: 0.6
                }
            }
        ];
    }

    const option = {
        series: [{
            type: 'treemap',
            breadcrumb: {
                show: false
            },
            upperLabel: {
                show: true
            },
            label: {
                show: true,
                formatter: (params: any) => {
                    console.log(params)
                    if (params.data.children && params.data.children.length > 0) {
                        return params.name
                    } else {
                        return `${params.name}\n${params.value[1]}`
                    }
                }
            },
            levels: getLevelOption(),
            data: [{
                name: 'nodeA',
                value: [10, '一段文字10'],
                children: [{
                        name: 'nodeAa',
                        value: [4, '一段文字4']
                    },
                    {
                        name: 'nodeAb',
                        value: [6, '一段文字'],
                        children: [{
                                name: 'nodeAba',
                                value: [4, '一段文字4']
                            },
                            {
                                name: 'nodeAbb',
                                value: [6, '一段文字']
                            }
                        ]
                    }
                ]
            },
            {
                name: 'nodeB',
                value: [10, '一段文字b10'],
                children: [{
                        name: 'nodeBa',
                        value: [4, '一段文字b4']
                    }
                ]
            }]
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
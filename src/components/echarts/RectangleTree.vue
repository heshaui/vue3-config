<script setup lang="ts">
    let dom = ref(null)
    const {
        proxy
    } = getCurrentInstance() as any

    defineProps({
        title: String
    })

    const options = {
        series: [{
            type: 'treemap',
            data: [
                {
                    name: 'nodeA',
                    value: 10,
                    children: [{
                            name: 'nodeAa',
                            value: 4
                        },
                        {
                            name: 'nodeAb',
                            value: 6
                        }
                    ]
                },
                {
                    name: 'nodeB',
                    value: 20,
                    children: [{
                        name: 'nodeBa',
                        value: 20,
                        children: [{
                            name: 'nodeBa1',
                            value: 20
                        }]
                    }]
                }
            ]
        }]
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
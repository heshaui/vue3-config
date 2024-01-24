<script setup lang="ts">
import worldMapJson from '@/assets/json/worldMap.json'
let dom = ref(null)
const { proxy } = getCurrentInstance() as any

defineProps({
    title: String,
    data: Array
})

onMounted(() => {
    let chart = proxy.$echarts.init(dom.value);
    proxy.$echarts.registerMap('WorldMap', worldMapJson);
    let option = {
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2
        },
        visualMap: {
            left: 'right',
            min: 5000,
            max: 40000,
            inRange: {
                color: [
                    '#313695',
                    '#4575b4',
                    '#74add1',
                    '#abd9e9',
                    '#e0f3f8',
                    '#ffffbf',
                    '#fee090',
                    '#fdae61',
                    '#f46d43',
                    '#d73027',
                    '#a50026'
                ]
            },
            text: ['High', 'Low'],
            calculable: true
        },
        series: [
            {
                name: 'WorldMap',
                type: 'map',
                roam: true,
                map: 'WorldMap',
                itemStyle: {
                    borderColor: '#fff'
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    { name: 'China', value: 20010 },
                    { name: 'Australia', value: 12010 },
                    { name: 'United States', value: 32010 },
                    { name: 'Japan', value: 22010 }
                ]
            }
        ]
    };

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
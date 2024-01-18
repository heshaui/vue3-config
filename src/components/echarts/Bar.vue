<script setup lang="ts">
import type { ECharts } from 'echarts';

let dom = ref(null)
const { proxy } = getCurrentInstance() as any

const props = defineProps({
    title: String,
    horizontal: Boolean,
    axis: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    // 水平摆放时, 可能会出现坐标轴文字过长溢出, 可以使用这个值控制图表距离左侧的距离, 让出更多位置给文字
    left: [String, Number]
})

const options: any = {
  grid: {},
  xAxis: {
    type: 'category'
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [],
      type: 'bar'
    }
  ]
};
if (props.axis.length != props.data.length) {
    console.warn('Bar: axis 和 data的长度不同, 渲染可能会有问题')
}
// 使用传入的 轴信息
options.xAxis.data = props.axis
options.series[0].data = props.data

// 如果是横向 互换坐标轴
if (props.horizontal) {
    let xAxis = options.xAxis
    let yAxis = options.yAxis

    options.xAxis = yAxis
    options.yAxis = xAxis

    if (props.left) {
      options.grid.left = props.left
    }
}

onMounted(() => {
    let chart: ECharts = proxy.$echarts.init(dom.value);
    chart.setOption(options)
})

</script>

<template>
    <h4 class="text-[20px] font-bold text-center">{{ title }}</h4>
    <div ref="dom" class="w-[100%] h-[400px]"></div>
</template>

<style scoped lang="scss">

</style>
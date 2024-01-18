<script setup lang="ts">
import type { ECharts } from 'echarts';

let dom = ref(null)
const { proxy } = getCurrentInstance() as any

const props = defineProps({
    title: String,
    horizontal: Boolean,
    axis: Array
})

const options: any = {
  xAxis: {
    type: 'category'
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
};
// 使用传入的 轴信息
options.xAxis.data = props.axis

// 如果是横向 互换坐标轴
if (props.horizontal) {
    let xAxis = options.xAxis
    let yAxis = options.yAxis
    options.xAxis = yAxis
    options.yAxis = xAxis
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
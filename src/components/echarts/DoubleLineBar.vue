<script setup lang="ts">
let dom = ref(null)
const { proxy } = getCurrentInstance()

const options = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};

onMounted(() => {
    let chart = proxy.$echarts.init(dom.value);
    chart.setOption(options)
})

</script>

<template>
    <div ref="dom" class="w-[100%] h-[400px]">

    </div>
</template>

<style scoped lang="scss">

</style>
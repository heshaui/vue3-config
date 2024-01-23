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
    // prettier-ignore
    const hours = [
        '1990', '1991', '1992', '1993', '1994', '1995',
        '1996', '1997', '1998', '1999', '2000', '2001'
    ];
    // prettier-ignore
    const days = [
        '技术1', '技术2', '技术3',
        '技术4', '技术5', '技术6', '技术7'
    ];
    // prettier-ignore
    const data = [
            [0, 0, 4],
            [0, 1, 1],
            [0, 2, 1],
            [0, 3, 3],
            [0, 4, 4],
            [0, 5, 6],
            [0, 6, 4],
            [0, 7, 4],
            [0, 8, 3],
            [0, 9, 3],
            [0, 10, 2],
            [0, 11, 5],

            [1, 0, 2],
            [1, 1, 6],
            [1, 2, 9],
            [1, 3, 11],
            [1, 4, 6],
            [1, 5, 7],
            [1, 6, 8],
            [1, 7, 12],
            [1, 8, 5],
            [1, 9, 5],
            [1, 10, 7],
            [1, 11, 2],
            
            [2, 0, 1],
            [2, 1, 9],
            [2, 2, 8],
            [2, 3, 10],
            [2, 4, 6],
            [2, 5, 5],
            [2, 6, 5],
            [2, 7, 5],
            [2, 8, 7],
            [2, 9, 4],
            [2, 10, 2],
            [2, 11, 4],
            
            [3, 0, 7],
            [3, 1, 14],
            [3, 2, 13],
            [3, 3, 12],
            [3, 4, 9],
            [3, 5, 5],
            [3, 6, 5],
            [3, 7, 10],
            [3, 8, 6],
            [3, 9, 4],
            [3, 10, 4],
            [3, 11, 1],
            
            [4, 0, 2],
            [4, 1, 4],
            [4, 2, 4],
            [4, 3, 14],
            [4, 4, 12],
            [4, 5, 1],
            [4, 6, 8],
            [4, 7, 5],
            [4, 8, 3],
            [4, 9, 7],
            [4, 10, 3],
            [4, 11, 0],
            
            [5, 0, 5],
            [5, 1, 10],
            [5, 2, 5],
            [5, 3, 7],
            [5, 4, 11],
            [5, 5, 6],
            [5, 6, 0],
            [5, 7, 5],
            [5, 8, 3],
            [5, 9, 4],
            [5, 10, 2],
            [5, 11, 0],
            
            [6, 0, 2],
            [6, 1, 1],
            [6, 2, 3],
            [6, 3, 4],
            [6, 4, 0],
            [6, 5, 0],
            [6, 6, 0],
            [6, 7, 0],
            [6, 8, 1],
            [6, 9, 2],
            [6, 10, 2],
            [6, 11, 6]
        ]
        .map(function (item) {
            return [item[1], item[0], item[2]];
        });
    const option = {
        // legend: {
        //     data: ['Punch Card'],
        //     left: 'right'
        // },
        tooltip: {
            position: 'top',
            formatter: function (params: any) {
                return (
                    params.value[2] +
                    hours[params.value[0]] +
                    ' of ' +
                    days[params.value[1]]
                );
            }
        },
        grid: {
            left: 2,
            bottom: 10,
            right: 10,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: hours,
            boundaryGap: false,
            splitLine: {
                show: true
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            data: days,
            axisLine: {
                show: false
            }
        },
        series: [{
            name: 'Punch Card',
            type: 'scatter',
            symbolSize: function (val: any) {
                return val[2] * 2;
            },
            data: data,
            animationDelay: function (idx: any) {
                return idx * 5;
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
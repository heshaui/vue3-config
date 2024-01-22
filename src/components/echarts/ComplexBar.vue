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

    const colors = ["rgba(43 ,140, 240,0.5)", "rgba(43 ,140, 240,0.6)", "rgba(43 ,140, 240,0.7)", "rgba(43 ,140, 240,0.8)", "rgba(43 ,140, 240,0.9)", "rgba(43 ,140, 240,1)", "rgba(0, 126 ,255,1)", "rgba(0, 107, 218,1)", "rgba(9, 96, 186,1)", "rgba(11, 80, 152,1)"]

    const option: any = {
        legend: {
            top: 0,
            itemWidth: 6,
            itemHeight: 6,
            itemGap: 20,
            show: true,
            data: []
        },
        tooltip: {
            confine: true,
            formatter: function (e: any) {
                return "" != e.data.country ? e.data.country + "</br>" + e.name + "&nbsp;数量：" + e.data.count : e
                    .name + "&nbsp;数量：" + e.data.count
            }
        },
        grid: [],
        xAxis: [],
        yAxis: [],
        series: []
    }

    const setData = function (e: Array<any>) {
        if (option.grid = [],
            option.xAxis = [],
            option.yAxis = [],
            option.series = [],
            option.legend.data = [],
            option.legend.show = true,
            e && !(e.length <= 0)) {
            // e.sort(a.a.sortby("value")),
            //     e.forEach((function (e: any) {
            //         option.legend.data = e.conpany,
            //             e.secondCateData && e.secondCateData.length > 0 && e.secondCateData.sort(a.sortby("count"))
            //     }));
            for (var i = 0; i < e.length; i++) {
                var data = e[i],
                n = e.length >= 8 ? 8 : e.length,
                a = Math.floor(100 / n + 1);
                option.grid.push({
                    top: "20%",
                    width: 740,
                    left: i * a + "%",
                    bottom: "8%"
                }),
                option.xAxis.push({
                    type: "value",
                    show: false,
                    data: [],
                    gridIndex: i,
                    max: 200
                }),
                option.yAxis.push({
                    type: "category",
                    gridIndex: i,
                    nameTextStyle: {
                        color: "#region",
                        align: "left",
                        padding: [0, 10, 0, 10]
                    },
                    name: "2020",
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    data: ['11', '22', '33', '11', '22', '33', '11', '22'],
                    axisLine: {
                        lineStyle: {
                            type: "solid",
                            color: colors[colors.length - 1]
                        }
                    }
                }),
                option.series.push({
                    type: "bar",
                    name: 'seriesName',
                    xAxisIndex: i,
                    yAxisIndex: i,
                    barHeight: 20,
                    label: {
                        show: true,
                        color: "#fff",
                        formatter: function (e: any) {
                            return e.name
                        }
                    },
                    data: [{
                        value: 20,
                        count: 11,
                        country: ""
                    }, {
                        value: 20,
                        count: 10,
                        country: ""
                    }, {
                        value: 20,
                        count: 10,
                        country: ""
                    }, {
                        value: 20,
                        count: 10,
                        country: ""
                    }, {
                        value: 20,
                        count: 10,
                        country: ""
                    }, {
                        value: 20,
                        count: 10,
                        country: ""
                    }, {
                        value: 20,
                        count: 10,
                        country: ""
                    }, {
                        value: 20,
                        count: 10,
                        country: ""
                    }, {
                        value: 20,
                        count: 20,
                        country: ""
                    }, {
                        value: 20,
                        count: 30,
                        country: ""
                    }],
                    itemStyle: {
                        normal: {
                            color: function (e: any) {
                                return colors[e.dataIndex]
                            }
                        }
                    }
                }),
                option.yAxis[i].name = data.value;
                // 填充数据
                // for (var i = 0; i < 10; i++) {
                //     if (data.secondCateData.length > i) {
                //         var s = data.secondCateData[i];
                //         option.yAxis[i].data.push(s.value);
                //         option.series[i].data[i].count = s.count;
                //         option.series[i].data[i].country = s.name ? s.name : "";
                //         // data.v3 && (option.series[i].data[i].color = s.color);
                //     } else {
                //         // data.v3 && (option.series[i].data[i].value = 0);
                //         option.yAxis[i].data.push("空");
                //         option.series[i].data[i].count = 0
                //     }
                // }
            }
            option.series.forEach((function (e: any, r: any) {
                e.data.reverse(),
                option.yAxis[r].data.reverse()
            }));
        }
    }

    onMounted(() => {
        setData([
            {name: '测试1', value: '2020'},
            {name: '测试2', value: '2021'},
            {name: '测试3', value: '2022'},
            {name: '测试4', value: '2023'},
            {name: '测试5', value: '2024'},
            {name: '测试6', value: '2025'},
            {name: '测试7', value: '2026'},
            {name: '测试8', value: '2027'}
        ])
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
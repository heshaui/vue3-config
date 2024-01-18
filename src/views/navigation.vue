<script setup lang="ts">

</script>

<template>
    <Page :layout="false">
        <div class="overview-content">
            <h4 class="title text-center mt-[100px] text-[24px]">产品名</h4>
            <div class="flex mt-[20px]">
                <el-card class="flex-1" shadow="hover">
                    <DoubleLineBar title="专利趋势" />
                </el-card>
                <el-card class="flex-1" shadow="hover">
                    <Pie title="专利类型" />
                </el-card>
            </div>
            <div class="flex mt-[20px]">
                <el-card class="flex-1" shadow="hover">
                    <WorldMap title="目标市场国" />
                </el-card>
                <el-card class="flex-1" shadow="hover">
                    <RectangleTree title="技术构成" />
                </el-card>
            </div>
            <div class="flex mt-[20px]">
                <el-card class="flex-1" shadow="hover">
                    <Bar
                        title="申请人排名分析"
                        :axis="['华为', '小米', '苹果', '三星', '一加']"
                    />
                </el-card>
                <el-card class="flex-1" shadow="hover">
                    <Bar
                        title="发明人排名分析"
                        :axis="['米波', '奈文摩尔', '尤涅若', '拉比克', '']"
                        horizontal
                    />
                </el-card>
            </div>
            <div class="flex mt-[20px]">
                <el-card class="flex-1" shadow="hover">
                    <Bar
                        title="重点专利"
                        :axis="['米波', '奈文摩尔', '尤涅若', '拉比克', '']"
                        horizontal
                    />
                </el-card>
                <div class="flex-1 ml-[20px]"></div>
            </div>
        </div>
    </Page>
</template>

<style scoped lang="scss">
.overview-content {
    .title {
        font-size: 25px;
        font-weight: bold;
    }

    .el-card +.el-card {
        margin-left: 20px;
    }
}
</style>
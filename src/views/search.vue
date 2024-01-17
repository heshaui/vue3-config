<script setup lang="ts">
    let keyword = ref('');
    let tags = reactive(['人工智能', 'tag2', 'tag2', 'tag2', 'tag2', 'tag2'])

</script>

<template>
    <Page :layout="false">
        <div class="search-content">
            <p class="title mb-[20px]">请输入技术关键字</p>
            <div class="search-bar">
                <el-input v-model="keyword" size="large" placeholder="请输入检索内容" />
                <el-button size="large" type="primary">创建报告</el-button>
            </div>
            <div class="search-tags mt-[20px]">
                <span class="hot-tag mr-[10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fire-icon" viewBox="0 0 24 24" width="20" height="20"><defs data-reactroot=""></defs><g><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04a4.8 4.8 0 0 1-4.8 4.8z"></path></g></svg>
                    热词推荐:
                </span>
                <el-button v-for="tag in tags" :key="tag" type="primary" link>{{ tag }}</el-button>
            </div>
            <div class="text-center mt-[200px]">
                <el-icon><Lock /></el-icon>免费版本：可以进行检索只展示概览页面（默认只展示7个）
            </div>
        </div>
    </Page>
</template>

<style scoped lang="scss">
.search-content {
    width: 800px;
    margin: 0 auto;
    padding-top: 100px;

    .title {
        text-align: center;
    }

    .search-bar {
        display: flex;
        .el-input {
            border-radius: 4px 0px 0px 4px;
        }
        .el-button {
            border-radius: 0px 4px 4px 0px;
        }
    }

    .search-tags {
        display: flex;
        .hot-tag {
            display: flex;
            .fire-icon {
                fill: red;
            }
        }
    }
}
</style>
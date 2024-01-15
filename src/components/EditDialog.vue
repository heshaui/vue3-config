<script setup lang="ts">
    const props = defineProps({
        dialogEditVisible: {
            type: Boolean,
            required: false
        }
    })
    const emit = defineEmits(['update:dialogEditVisible', 'onSave'])
    const form = reactive({
        name: '',
        keyword: '',
        retrieveExpressions: ''
    })
    const onClose = () => {
        emit('update:dialogEditVisible', false)
    }
    const onSave = () => {
        emit('onSave', form)
    }
</script>

<template>
    <el-dialog v-model="dialogEditVisible" title="编辑">
        <el-form :model="form">
            <el-form-item label="报告名称" label-width="80">
                <el-input v-model="form.name" placeholder="输入报告名称"></el-input>
            </el-form-item>
            <el-form-item label="技术领域" label-position="top">
                <div>
                    <el-button type="primary" plain>关键词</el-button>
                    <el-button plain>检索表达式</el-button>
                </div>
                <el-input v-model="form.keyword" maxlength="30" placeholder="输入技术领域关键词"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="onClose">取消</el-button>
                <el-button type="primary" @click="onSave">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>
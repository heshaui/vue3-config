<script setup lang="ts">
    const props = defineProps({
        visible: Boolean
    })
    const emit = defineEmits(['update:visible', 'onClose', 'onSave'])
    const form = reactive({
        name: '',
        keyword: '',
        retrieveExpressions: ''
    })
    const visible = computed({
        get() {
            return props.visible
        },
        set(val) {
            emit('update:visible', val)
        }
    })
    const onClose = () => {
        emit('update:visible', false)
    }
    const onSave = () => {
        emit('onSave', form)
        onClose()
    }
</script>

<template>
    <el-dialog v-model="visible" title="编辑">
        <el-form :model="form" label-position="top">
            <el-form-item label="报告名称" label-width="70" label-position="right">
                <el-input v-model="form.name" placeholder="输入报告名称"></el-input>
            </el-form-item>
            <el-form-item label="技术领域">
                <div class="mb-[15px]">
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
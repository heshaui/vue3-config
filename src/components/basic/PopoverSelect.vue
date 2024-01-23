<script setup lang="ts">
    import { Operation } from '@element-plus/icons-vue'
    interface Tree {
        [key: string]: any
    }
    const props = defineProps({
        selectTit: String,
        data: {
            type: Array,
            default: () => []
        },
        defaultSelections: {
            type: Array,
            default: () => []
        }
    })
    const emit = defineEmits(['onChange'])
    const visible = ref(false)
    const treeRef = ref()
    const filterText = ref('')
    const treeProps = {
        children: 'children',
        label: 'name'
    }
    const treeData = computed(() => {
        return props.data.map(item => ({name: item}))
    })
    watch(filterText, (val) => {
        treeRef.value!.filter(val)
    })
    const filterMenu = (value:string, data:Tree) => {
        if (!value) return true
        return data.name.includes(value)
    }
    const handleConfirm = () => {
        const selections = treeRef.value!.getCheckedKeys()
        console.log(selections)
        emit('onChange', selections)
        visible.value = false
    }
</script>

<template>
    <el-popover placement="right" :width="300" :visible="visible">
      <template #reference>
        <el-button type="primary" :icon="Operation" link class="text-[25px] float-right" @click="visible = true"></el-button>
      </template>
      <h3 v-if="selectTit" class="text-[16px] mb-[10px]">{{ selectTit }}</h3>
      <el-input v-model="filterText" placeholder="输入关键字进行过滤" />
      <div class="myTree" style="max-height: 500px; overflow: auto;">
          <el-tree
              ref="treeRef"
              :data="treeData"
              :show-checkbox="true"
              default-expand-all
              node-key="name"
              :default-checked-keys="defaultSelections"
              :props="treeProps"
              :filter-node-method="filterMenu"
          />
      </div>
      <div class="text-right mt-[20px]">
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm">确定</el-button>
      </div>
    </el-popover>
</template>
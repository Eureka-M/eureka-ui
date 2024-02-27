<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { computed,  defineOptions} from 'vue'

import { createNamespace } from '@eureka-ui/utils/create'
import { iconProps } from './icon'

const bem = createNamespace('icon')

defineOptions({
    name: 'ErIcon'
})

const props = defineProps(iconProps)

const style = computed(() => {
    if (!props.size && !props.color) return {}
    return {
        ...(props.size ? { "font-size": props.size + "px"} : {}),
        ...(props.color ? { "color": props.color} : {})
    }
})
</script>
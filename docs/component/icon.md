# Icon 图标

使用 xicons 作为图标库

```
npm i -D @vicons/fluent
```

## 使用图标

- 如果你想像示例一样直接使用，需要注册注册组件，才能直接在项目中使用

<script setup lang="ts">
import { Money16Regular } from '@vicons/fluent'
</script>

<er-icon color="red" size="24">
  <Money16Regular />
</er-icon>

<er-icon color="yellow" size="24">
  <Money16Regular />
</er-icon>

```vue
<script setup lang="ts">
import { Money16Regular } from '@vicons/fluent'
</script>

<template>
  <er-icon color="red" size="24">
    <Money16Regular />
  </er-icon>
</template>
```

## API

### Icon Props

| 名称  | 类型            | 默认值    | 说明     |
| ----- | --------------- | --------- | -------- |
| color | string          | undefined | 图标颜色 |
| size  | number / string | undefined | 图标大小 |


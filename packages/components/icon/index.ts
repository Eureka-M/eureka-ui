// 实现导出组件

import _Icon from './src/icon.vue'
import { withInstall } from '@eureka-ui/utils/withInstall'


const Icon = withInstall(_Icon)

export default Icon

export * from './src/icon'

// 方便模版解析
declare module 'vue' {
    export interface GlobalComponents {
        ErIcon: typeof Icon
    }
}
import DefaultTheme from 'vitepress/theme'

import ErIcon from '@eureka-ui/components/icon'
import '@eureka-ui/theme-chalk/src/icon.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // vitepress 注册全局组件
    app.use(ErIcon)
  }
}

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Icon from '@eureka-ui/components/icon'
import '@eureka-ui/theme-chalk/src/index.scss'

const plugins = [
    Icon
]



const app = createApp(App)
plugins.forEach(plugin => app.use(plugin))

app.mount('#app')

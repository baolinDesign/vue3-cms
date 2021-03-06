import { createApp } from 'vue'
import hyRequest from './service'

// 全局引用
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

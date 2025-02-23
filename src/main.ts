const app = createApp(App)
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './scss/null.scss'
import './scss/style.scss'

//app.use(router)
app.use(createPinia())

app.mount('#app')

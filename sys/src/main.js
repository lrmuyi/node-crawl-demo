import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import './plugins/element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/element-ui-common.css'
import '../node_modules/normalize.css/'
import './assets/style/reset.css'
import './assets/style/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

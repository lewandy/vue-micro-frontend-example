import Vue from '../../home/node_modules/.pnpm/vue@2.6.14/node_modules/vue/types'
import App from './App.vue'

Vue.config.productionTip = false

var vm = new Vue({
  render: (h) => h(App)
})
vm.$mount('#app')

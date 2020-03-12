import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import vuetify from './plugins/vuetify'
import './plugins/vue-toasted'
import './plugins/firebase'
import './plugins/axios'
import './error'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

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

// 전역으로 어디서나 사용 할수 있지만
// 컴포넌트들 사이에서 상태가 변한걸 알수가 없다.
// 그래서 Vuex 를 사용한다.
const global = 'abcd'
Vue.prototype.$global = global

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

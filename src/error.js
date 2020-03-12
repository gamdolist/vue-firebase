import Vue from 'vue'

// Vue 에서 에러가 발생하면 이쪽으로 들어온다.

Vue.config.errorHandler = function(err, vm, info) {
  // console.log(err.message)
  // vue-toasted.js 를 호출한다.
  Vue.prototype.$toasted.global.error(err.message)
}

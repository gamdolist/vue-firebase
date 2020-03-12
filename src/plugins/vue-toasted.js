import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  iconPack: 'mdi'
})

// error.js 에서 호출한다.
Vue.toasted.register('error', (payload) => {
  return payload
}, {
  icon: 'mdi-alert',
  position: 'bottom-right',
  duration: 1000 * 5,
  className: 'subheading',
  action: {
    text: 'Close',
    onClick: (e, toastObject) => {
      toastObject.goAway(0)
    }
  }
})

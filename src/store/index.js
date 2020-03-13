import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Original Title',
    user: null,
    token: ''
  },
  mutations: {
    // 어디에서건 this.$store.commit 으로 호출 가능
    setTitle(state, payload) {
      state.title = payload
    },
    setUser(state, user) {
      state.user = user
    },
    setToken(state, token) {
      state.token = token
    }
  },
  // 시간이 걸리는 비동기 작업
  actions: {
    getUser({ context }, user) {
      this.commit('setUser', user)
      if (!user) return
      user.getIdToken()
        .then(token => {
          this.commit('setToken', token)
        })
      console.log("getUser:" + user)
    }
  },
  modules: {
  }
})

import Vue from 'vue'

import axios from 'axios'

const firebaseAPI = axios.create({
  baseURL: 'http://localhost:5001/vue-firebase-fdd01/us-central1/',
  timeout: 1000 * 5,
  headers: { 'X-Custom-Header': 'foobar' }
})

// interceptors
firebaseAPI.interceptors.request.use(function(config) {
  config.headers.authorization = Math.random()
  return config
}, function(error) {
  return Promise.reject(error)
})

Vue.prototype.$axios = firebaseAPI

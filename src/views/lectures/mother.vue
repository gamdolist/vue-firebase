<template>
  <v-card>
    <my-son name="aaa" @help="listen"></my-son>
    <my-doughter name="bbb"></my-doughter>
    <v-card-text>
      <v-alert
      v-model="call"
      type="success">
        This is a success alert.
      </v-alert>
    </v-card-text>
  </v-card>
</template>

<script>

import MySon from '../../components/MySon.vue'
import MyDoughter from '../../components/MyDoughter'

// global registration
// import Vue from "vue"
// Vue.component('my-son', MySon)
// Vue.component('my-doughter', MyDoughter)

export default {
  name: 'mother',
  components: {
    MySon,
    MyDoughter
  },
  data() {
    return {
      call: false
    }
  },
  methods: {
    listen() {
      this.call = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

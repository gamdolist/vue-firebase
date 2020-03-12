<template>
  <v-card>
    <v-card-title primaty-title>
      My Son: {{name}}
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="call">Call</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['name'],
  methods: {
    call() {
      // 부모한테 전달하는 한다.
      // 부모는 @help 형태로 받는다.
      this.$emit('help')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div>
    <v-btn color="success"
    @click="set">set</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    set() {
      this.$store.commit('setTitle', 'Are you changed ?')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

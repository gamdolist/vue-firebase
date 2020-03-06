<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-toolbar color="primary" dark>
        <VToolbarTitle>here</VToolbarTitle>
        <v-spacer></v-spacer>
        <v-btn color="red" icon>
            <v-icon>mdi-arrange-bring-forward</v-icon>
        </v-btn>
    </v-toolbar>
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn text>Share</v-btn>

      <v-btn color="purple" text>
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{card_text}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      card_text: 'this is card text'
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>

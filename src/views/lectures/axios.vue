<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-toolbar color="primary">
          axios eg
        </v-toolbar>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>
            create
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="textCreate" rows="10">
            </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="create">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>
            read
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="textRead" rows="10">
            </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="read">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>
            update
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="textUpdate" rows="10">
            </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="update">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title primary-title>
            delete
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="textDelete" rows="10">
            </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="del">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      textCreate: '',
      textRead: '',
      textUpdate: '',
      textDelete: ''
    }
  },
  methods: {
    // backend firebase RESTfull API connect
    // create() {
    //   this.$axios.post('http://localhost:5001/vue-firebase-fdd01/us-central1/test')
    //     .then(r => { this.textCreate = r.data })
    //     .catch(e => console.log(e.message))
    // },
    async create() {
      // this.$toasted.show('ddddd')
      // this.$toasted.global.error('error message')
      const r = await this.$axios.post('test')
      this.textCreate = r.data
    },
    read() {
      // http://localhost:5001/vue-firebase-fdd01/us-central1/test/12345
      this.$axios.get('test/12345')
        .then(r => { this.textRead = r.data })
        .catch(e => console.log(e.message))
    },
    update() {
      this.$axios.put('test/12345')
        .then(r => { this.textUpdate = r.data })
        .catch(e => console.log(e.message))
    },
    del() {
      this.$axios.delete('test/12345')
        .then(r => { this.textDelete = r.data })
        .catch(e => console.log(e.message))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

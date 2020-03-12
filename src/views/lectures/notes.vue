<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex xs5>
        <v-text-field v-model="title" label="title"/>
      </v-flex>
      <v-flex xs5>
        <v-text-field v-model="content" label="content"/>
      </v-flex>
      <v-flex xs2>
        <v-btn color="success" @click="post">post</v-btn>
      </v-flex>
    </v-layout>
    <v-data-iterator
      content-tag="v-layout"
      row
      wrap
      :items="items"
      rowsPerPageItems="rowsPerPageItems"
      pagination.sync="pagination"
    >
    <template v-slot:item="props">
      <v-flex xs12, sm6 md4 lg3>
        <v-card>
        <v-card-title><h4>{{props.item.title}}</h4></v-card-title>
        <VDivider/>
        <v-card-text>
          {{props.item.content}}
        </v-card-text>
        <v-card-text>
          {{props.item.id}}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="put(props.item.id)">put</v-btn>
          <v-btn @click="del(props.item.id)">del</v-btn>
        </v-card-actions>
        </v-card>
      </v-flex>
    </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import Vue from 'vue'
import Vuetify, { VListItem } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: { VListItem }
})

export default {
  data: () => ({
    rowsPerPateItems: [4, 8, 12],
    pagenation: {
      rowsPerPage: 4
    },
    items: [],
    title: '',
    content: ''
  }),
  computed: {

  },
  mounted() {
    this.get()
  },
  methods: {
    post() {
      // this.items.push({ title: this.title, content: this.content })
      this.$firebase.firestore().collection('notes').add({
        title: this.title, conetnt: this.content
      }).then(r => {
        this.get()
      }).cach(e => {
        console.log(e)
      })
    },
    async get() {
      this.items = []
      const snapshot = await this.$firebase.firestore().collection('notes').get()
      snapshot.forEach(v => {
        const { title, content } = v.data()
        this.items.push({
          title, content, id: v.id
        })
      })
      console.log(snapshot)
    },
    async put(id) {
      const r = await this.$firebase.firestore().collection('notes').doc(id).set({
        title: this.title, content: this.content
      })
      console.log(r)

      await this.get()
    },
    async del(id) {
      const r = await this.$firebase.firestore().collection('notes').doc(id).delete()
      console.log(r)
      await this.get()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

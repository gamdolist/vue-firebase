<template>
<v-card>
<v-card-title>
Login
</v-card-title>
<v-card-text>
  <v-text-field label="email" v-model="email">
  </v-text-field>
  <v-text-field label="password" v-model="password" type="password">
  </v-text-field>
</v-card-text>
<v-card-actions>
  <v-spacer></v-spacer>
  <v-btn color="primary" @click="sigInWithGoogle">
    <v-icon>mdi-google</v-icon>
    Google Login
  </v-btn>
  <v-btn color="primary" @click="signInWithEmail">
    <v-icon>mdi-email</v-icon>
    E-Mail Login
  </v-btn>
  <v-btn color="primary" @click="signOut">
    <v-icon>mdi-log-out</v-icon>
    SignOut
  </v-btn>
</v-card-actions>
</v-card>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async sigInWithGoogle() {
      var provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'kor'

      const r = await this.$firebase.auth().signInWithPopup(provider)

      console.log("sigInWithGoogle:" + r)
    },
    async signInWithEmail() {
      console.log("starting...signInWithEmail")
      const r = await this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      console.log("signInWithEmail:" + r)
    },
    async signOut() {
      console.log("starting...signOut")
      const r = await this.$firebase.auth().signOut()
      console.log("signOut" + r)
    }
  }
}
</script>

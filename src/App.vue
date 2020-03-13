<template>
  <v-app>
      <v-navigation-drawer v-model="drawer" fixed>
        <navigation-left/>
      </v-navigation-drawer>
      <v-card dark fixed app
        color="grey lighten-4"
        flat
        height="65px"
        tile
      >
      <v-toolbar>
        <v-app-bar-nav-icon @click="onNavigationLeft"></v-app-bar-nav-icon>

        <v-toolbar-title>{{$store.state.user ? $store.state.user.displayName : 'Not LogIn'}}</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn color="success">text</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>

    <v-content>
      <!-- <HelloWorld/> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavigationLeft from './components/NavigationLeft'
// import SideBar from './components/SideBar'

export default {
  name: 'App',

  components: {
    NavigationLeft
  },
  methods: {
    onNavigationLeft(e) {
      console.log('cki')
      this.drawer = !this.drawer
    }
  },
  data() {
    return {
      drawer: true
    }
  }
}
</script>

<template>
  <div>
    <v-toolbar flat color="transparent">
      <v-toolbar-title>Account</v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.icon"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="subItem in item.subItems" :key="subItem.title"
          :to="subItem.to"
          >
        <v-list-item-content>
          <v-list-item-title>{{subItem.title}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon ripple>
            <v-icon>{{subItem.icon}}</v-icon>
          </v-btn>
        </v-list-item-action>
        </v-list-item>
      </v-list-group>

    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-alert',
          title: 'home',
          active: true,
          subItems: [
            {
              title: 'dashboard',
              to: '/',
              icon: 'mdi-alert'
            },
            {
              title: 'About2',
              to: '/about2',
              icon: 'mdi-alert-box'
            }
          ]
        },
        {
          icon: 'mdi-alert-box',
          title: 'Lectures',
          active: false,
          subItems: [
            {
              title: 'card',
              to: '/lectures/card',
              icon: 'mdi-alert-box'
            },
            {
              title: 'layout',
              to: '/lectures/layout',
              icon: 'mdi-alert-box'
            },
            {
              title: 'notes',
              to: '/lectures/notes',
              icon: 'mdi-alert-box'
            },
            {
              title: 'axios',
              to: '/lectures/axios',
              icon: 'mdi-alert-box'
            },
            {
              title: 'mother',
              to: '/lectures/mother',
              icon: 'mdi-alert-box'
            },
            {
              title: 'vuex',
              to: '/lectures/vuex',
              icon: 'mdi-alert-box'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

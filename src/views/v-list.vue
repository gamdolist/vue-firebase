<template>
    <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-avatar>
                <v-icon>{{item.icon}}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
                <v-btn icon ripple>
                    <v-icon>mdi-alert-box</v-icon>
                </v-btn>
            </v-list-item-action>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { icon: 'mdi-alert', title: 'home' },
        { icon: 'mdi-alert-box', title: 'About' },
        { icon: 'mdi-alert-circle', title: 'About2' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

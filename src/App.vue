<template>
  <v-app>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Todo</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in links" :key="item.title" :to="item.url">{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" fixed>
      <v-list>
        <v-list-tile v-for="item in links" :key="item.id" :to="item.url">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-container>
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: 'Create', icon: 'playlist_add', url: '/' },
        { title: 'Tasks', icon: 'playlist_add_check', url: '/tasks' }
      ]
    }
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>

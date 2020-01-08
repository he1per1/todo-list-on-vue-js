<template>
  <v-layout class="mt-5">
    <v-flex xs12 sm6 offset-sm3 class="mt-5">
      <h1 class="headline text--secondary mb-3">Tasks</h1>

      <v-content v-if="allTask.length">
        <v-list three-line subheader class="pb-0 pt-0">
          <v-list-tile
            class="pointer"
            @click="0"
            v-for="item in allTask"
            :key="item.id"
          >
            <v-list-tile-action>
              <v-checkbox
                :disabled="!item.done"
                :input-value="item.done"
                color="primary"
              ></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content @click="sound = !sound">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{
                item.description.slice(0, 30) + '...'
              }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn :to="`/task/${item.id}`">
                Open
                <v-icon right>open_in_new</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-content>
      <v-layout v-else justify-center>
        <p class="red--text">
          No task
        </p>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      sound: false
    }
  },
  computed: mapGetters(['allTask'])
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>

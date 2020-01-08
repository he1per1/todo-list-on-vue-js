<template>
  <v-layout class="mt-5">
    <v-flex xs12 sm6 offset-sm3 class="mt-5">
      <h1 class="headline text--secondary mb-3">{{ task.title }}</h1>
      <p class="font-italic">{{ task.description }}</p>
      <v-layout>
        <v-btn class="ml-0" :to="`/tasks`">
          <v-icon>arrow_back_ios</v-icon>Back
        </v-btn>
        <v-btn color="primary" :to="`/task-edit/${task.id}`">
          <v-icon left>edit</v-icon>Edit
        </v-btn>
        <v-btn
          class="indigo"
          :class="{ success: task.done }"
          dark
          @click="complete_task"
        >
          <v-icon left>check</v-icon>
          {{ completed }}
        </v-btn>
        <v-btn color="error" @click="remove_task">
          Remove
          <v-icon right>delete_forever</v-icon>
        </v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      completed: 'To complete'
    }
  },
  computed: {
    task() {
      return this.$store.getters.searchTask(+this.id)
    }
  },
  methods: {
    remove_task() {
      this.$store.dispatch('removeTask')
      this.$router.push('/tasks')
    },
    complete_task() {
      this.$store.dispatch('completeTask', +this.id)
      // this.$router.push("/tasks");
      this.completed = this.completed === 'To complete' ? 'Done' : 'To complete'
    }
  },
  created() {
    this.completed = this.task.done === true ? 'Done' : 'To complete'
  }
}
</script>

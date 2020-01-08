<template>
  <v-layout class="mt-5">
    <v-flex xs12 sm6 offset-sm3 class="mt-5">
      <h1 class="headline text--secondary mb-3">Edit task</h1>
      <v-form v-model="valid" ref="form">
        <v-text-field
          v-model="title"
          :rules="titleRules"
          :counter="15"
          label="Title task"
          required
        ></v-text-field>
        <v-text-field
          :auto-grow="true"
          rows="2"
          v-model="description"
          :rules="descriptionRules"
          :counter="1000"
          label="Description task"
          required
          multi-line
        ></v-text-field>
        <v-layout justify-space-between>
          <v-btn class="ml-0 mt-3" :to="`/task/${task.id}`">
            <v-icon left>arrow_back_ios</v-icon>Back
          </v-btn>
          <v-btn class="mr-0 mt-3" :disabled="!valid" @click="submit_form">
            <v-icon left>update</v-icon>Update task
          </v-btn>
        </v-layout>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      valid: false,
      title: '',
      description: '',
      titleRules: [
        v => !!v || 'Title task is required',
        v =>
          v.length >= 5 ||
          'The title of the task must not be less than 5 characters',
        v => v.length <= 15 || 'Title must not exceed 15 characters'
      ],
      descriptionRules: [v => !!v || 'Title task is required']
    }
  },
  computed: {
    task() {
      return this.$store.getters.searchTask(+this.id)
    }
  },
  methods: {
    submit_form() {
      if (this.valid) {
        this.$store.dispatch('updateTask', {
          title: this.title,
          description: this.description,
          id: this.task.id,
          done: false
        })
        this.$router.push(`/task/${this.task.id}`)
      }
    }
  },
  created() {
    this.title = this.task.title
    this.description = this.task.description
  }
}
</script>

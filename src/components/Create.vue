<template>
  <v-layout class="mt-5">
    <v-flex xs12 sm6 offset-sm3 class="mt-5">
      <h1 class="headline text--secondary mb-3">Create task</h1>
      <v-form v-model="valid" ref="form">
        <v-text-field v-model="title" :rules="titleRules" :counter="15" label="Title task" required></v-text-field>
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
        <v-btn class="ml-0 mt-3" :disabled="!valid" @click="submit_form">
          <v-icon left>library_add</v-icon>Create task
        </v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
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
      descriptionRules: [
        v => !!v || 'Title task is required',
        v =>
          v.length >= 5 ||
          'The description of the task must not be less than 5 characters',
        v => v.length <= 1000 || 'Description must not exceed 15 characters'
      ]
    }
  },
  methods: {
    submit_form() {
      if (this.valid) {
        this.$store.dispatch('addTask', {
          title: this.title,
          description: this.description,
          id: Date.now(),
          done: false
        })
        this.$router.push('/tasks')
      }
    }
  }
}
</script>

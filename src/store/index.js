import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: JSON.parse(localStorage.getItem('list')) || []
  },
  getters: {
    allTask(state) {
      return state.list
    },
    searchTask(state) {
      return id => state.list.find(task => task.id === id)
    }
  },
  mutations: {
    addTask(state, task) {
      state.list.push(task)
      localStorage.setItem('list', JSON.stringify(state.list))
    },
    updateTask(state, task) {
      const id = state.list.findIndex(t => t.id === task.id)
      state.list[id] = { ...task }

      localStorage.setItem('list', JSON.stringify(state.list))
    },
    removeTask(state) {
      const index = state.list.findIndex(t => t.id)
      state.list.splice(index, 1)
      localStorage.setItem('list', JSON.stringify(state.list))
    },
    completeTask(state, id) {
      const current_task = state.list.findIndex(task => task.id === id)
      state.list[current_task].done =
        state.list[current_task].done === false ? true : false
      localStorage.setItem('list', JSON.stringify(state.list))
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task)
    },
    updateTask({ commit }, task) {
      commit('updateTask', task)
    },
    removeTask({ commit }) {
      commit('removeTask')
    },
    completeTask({ commit }, id) {
      commit('completeTask', id)
    }
  }
})

export default store

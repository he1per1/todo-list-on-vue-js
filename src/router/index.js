import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Create',
      component: () => import('@/components/Create')
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: () => import('@/components/Tasks')
    },
    {
      path: '/task/:id',
      props: true,
      name: 'Task',
      component: () => import('@/components/Task')
    },
    {
      path: '/task-edit/:id',
      props: true,
      name: 'Edit task',
      component: () => import('@/components/Edit')
    }
  ],
  mode: 'history'
})

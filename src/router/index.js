import { createRouter, createWebHistory } from 'vue-router';


const routes = [

  {
    path: '/',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue')
  }

]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router;

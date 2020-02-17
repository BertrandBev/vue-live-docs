import Vue from 'vue'
import VueRouter from 'vue-router'
import Documentation from '@dsrc/views/Documentation.vue'
import Home from '@dsrc/views/Home.vue'

Vue.use(VueRouter)

const classes = [
  { name: 'matrix', title: 'Matrix', icon: 'mdi-matrix' },
  { name: 'solvers', title: 'Solvers', icon: 'mdi-cogs' }
]
const classRoutes = classes.map(cl => ({
  ...cl,
  group: 'Classes',
  path: `/${cl.name}`,
  component: Documentation,
  props: { className: cl.title }
}))

const routes = [
  {
    path: '/',
    name: 'home',
    title: 'Live doc JS',
    group: 'Pages',
    component: Home,
    icon: 'mdi-lambda'
  },
  ...classRoutes,
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export { routes }
export default router

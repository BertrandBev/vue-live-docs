import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import vuetify from './plugins/vuetify';
import VueLiveDocs from '@src/main.js'

Vue.use(VueLiveDocs)

const store = new Vue({
  data: () => ({
    windowSize: { x: 0, y: 0 }
  })
})
Vue.prototype.$store = store

Vue.config.productionTip = false
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

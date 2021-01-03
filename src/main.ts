import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'

Vue.config.productionTip = false

Vue.use(Vuesax, {
  colors: {
    primary: '#0E7AEF',
    success: 'rgb(23, 201, 100)',
    danger: 'rgb(242, 19, 93)',
    warning: 'rgb(255, 130, 0)',
    dark: '#141417',
    sidebar: '#f8f7f7',
    textcolor: '#000000'
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

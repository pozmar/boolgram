import Vue from 'vue'
import App from './App.vue'
import TimeAgo from 'vue2-timeago'
import VueInfiniteScroll from '@grafikri/vue-infinite-scroll'
Vue.use(VueInfiniteScroll)




Vue.config.productionTip = false

export default {
  name: 'app',
  components: {
    TimeAgo,
  }
}

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import TimeAgo from 'vue2-timeago'
import VueInfiniteScroll from '@grafikri/vue-infinite-scroll'
import VScrollLock from 'v-scroll-lock'
import fullscreen from 'vue-fullscreen'

Vue.use(VScrollLock);
Vue.use(VueInfiniteScroll);
Vue.use(fullscreen);




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

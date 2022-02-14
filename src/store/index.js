import Vue from 'vue'
/* eslint-disable */
import Vuex from 'vuex'
/* eslint-enable */
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: require('./modules/blog').default
  }
})

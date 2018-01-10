import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import client from './modules/client'

window.axios = require('axios')
window.axios.defaults.baseURL = 'http://localhost:9000'
window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(Vuex)
export default {
  client: new Vuex.Store(client),
  product: new Vuex.Store(product)
}

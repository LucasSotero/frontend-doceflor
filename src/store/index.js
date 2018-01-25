import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import client from './modules/client'
import pdv from './modules/pdv'
import sale from './modules/sale'

window.axios = require('axios')
window.axios.defaults.baseURL = 'http://localhost:9000'
window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(Vuex)
export default {
  client: new Vuex.Store(client),
  product: new Vuex.Store(product),
  pdv: new Vuex.Store(pdv),
  sale: new Vuex.Store(sale)
}

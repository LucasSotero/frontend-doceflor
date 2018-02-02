export default {
  state: {
    report: [],
    methods: [],
    products: [],
    clients: []
  },
  mutations: {
    updateClients (state, data) {
      state.clients = data
    },
    updateProducts (state, data) {
      state.products = data
    },
    updateMethods (state, data) {
      state.methods = data
    },
    update (state, data) {
      state.report = data
    }
  },
  actions: {
    getProducts (context) {
      window.axios.get('/products').then(Response => {
        Response.data = Response.data.data.map(element => [element._id, element.name])
        context.commit('updateProducts', Response.data)
      })
    },
    getMethods (context) {
      let Response = ['Dinheiro', 'Cartão', 'Fiado']
      context.commit('updateMethods', Response)
    },
    getClients (context) {
      window.axios.get('/clients').then(Response => {
        Response.data = Response.data.data.map(element => [element._id, element.name])
        context.commit('updateClients', Response.data)
      })
    },
    getReport (context) {
      var data = {
        methods: this.$store.report.state.products,
        products: this.$store.report.state.products,
        clients: this.$store.report.state.clients
      }
      window.axios.post('/sales/report', data).then(Response => {
        console.log(Response)
        context.commit('update', Response.data)
      })
    }
  }
}

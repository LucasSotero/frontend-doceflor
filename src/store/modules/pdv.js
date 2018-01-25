export default {
  state: {
    products: [],
    product: {}
  },
  mutations: {
    updateOne (state, data) {
      state.products.push(data)
    },
    removeOne (state, data) {
      state.products.splice(data, 1)
    },
    updateValue (state, data) {
      state.products[data.key].value = data.data
    }
  },
  actions: {
    getOne (context, data) {
      window.axios.get('/products/search/' + data).then(Response => {
        let result = {
          id: Response.data.data._id,
          name: Response.data.data.name,
          value: Response.data.data.value
        }
        context.commit('updateOne', result)
      })
    }
  }
}

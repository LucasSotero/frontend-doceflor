export default {
  state: {
    products: [],
    product: {}
  },
  mutations: {
    insertAll (state, data) {
      state.products = data
    },
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
    remove (context, id) {
      window.axios.delete('/products/' + id)
    },
    getAll (context) {
    },
    getOne (context, data) {
      window.axios.get('/products/search/' + data).then(Response => {
        let result = {
          id: Response.data.data._id,
          name: Response.data.data.name,
          value: Response.data.data.value
        }
        console.log(result)
        context.commit('updateOne', result)
      })
    },
    post (context, data) {
      window.axios.post('/products/', data)
    },
    put (context, data) {
      window.axios.put('/products/' + data.id, data)
    }
  }
}

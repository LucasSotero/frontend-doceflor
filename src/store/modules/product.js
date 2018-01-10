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
      state.product = data
    }
  },
  actions: {
    getAll (context) {
      return window.axios.get('/products').then(Response => {
        Response.data = Response.data.data.map(element => [element._id, element.barCode, element.name, element.value])
        context.commit('insertAll', Response.data)
        return Response.data
      })
    },
    getOne (context, id) {
      window.axios.get('/products/' + id).then(Response => {
        let result = {
          id: Response.data.data._id,
          barCode: Response.data.data.barCode,
          name: Response.data.data.name,
          value: Response.data.data.value
        }
        context.commit('updateOne', result)
      })
    },
    post (context, data) {
      window.axios.post('/products/', data)
    },
    delete (context, id) {
      window.axios.delete('/products/' + id)
    },
    put (context, data) {
      window.axios.put('/products/' + data.id, data)
    }
  }
}

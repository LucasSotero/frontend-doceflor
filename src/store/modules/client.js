export default {
  state: {
    clients: [],
    client: {}
  },
  mutations: {
    insertAll (state, data) {
      state.clients = data
    },
    updateOne (state, data) {
      state.client = data
    }
  },
  actions: {
    getAll (context) {
      return window.axios.get('/clients').then(Response => {
        Response.data = Response.data.data.map(element => [element._id, element.name])
        context.commit('insertAll', Response.data)
        return Response.data
      })
    },
    getOne (context, id) {
      window.axios.get('/clients/' + id).then(Response => {
        let result = {
          id: Response.data.dasta._id,
          name: Response.data.data.name,
          cpf: Response.data.data.cpf,
          phone: [Response.data.data.phones],
          adress: Response.data.data.adress,
          complement: Response.data.data.complement
        }
        context.commit('updateOne', result)
      })
    },
    post (context, data) {
      window.axios.post('/clients/', data)
    },
    delete (context, data) {
      window.axios.delete('/clients/' + data)
    },
    put (context, data) {
      window.axios.put('/clients/' + data.id, data)
    }
  }
}

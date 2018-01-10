<template>
<div class="container">
  <div class="row margin"></div>
    <a class="waves-effect waves-light btn" href="#/clients/new">Novo</a>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th class="center-padding">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in clients">
        <td>{{client[1]}}</td>
        <td class="right">
          <a class="waves-effect waves-light btn-small blue btn" @click="details(client[0])"><i class="material-icons">edit</i></a>
          <a class="waves-effect waves-light btn-small red btn" @click="del(client[0])"><i class="material-icons">delete</i></a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'client-show',
  computed: {
    clients: function () {
      return this.$store.client.state.clients
    }
  },
  created () {
    this.$store.client.dispatch('getAll')
  },
  methods: {
    del: function (id) {
      this.$store.client.dispatch('delete', id)
      this.$store.client.dispatch('getAll')
    },
    details: function (id) {
      this.$router.push('/clients/view/' + id)
    }
  }
}
</script>

<style>
.btn-small {
    height: 24px;
    line-height: 24px;
    padding: 0 0.5rem;
}
.center-padding {
  text-align: right;
  padding: 2.5%;
}
</style>

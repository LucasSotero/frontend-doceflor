<template>
  <table class="highlight bordered" align="center">
    <thead>
      <tr>
        <th>Código de barras</th>
        <th>Descrição</th>
        <th>Valor</th>
        <th class="center-padding">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in list">
        <td v-for="i in data.length - 1">{{data[i]}}</td>
        <td class="right">
          <v-btn-small type="subject"></v-btn-small>
          <v-btn-small type="edit"></v-btn-small>
          <v-btn-small type="delete" @click="testes(1)"></v-btn-small>
          <a class="waves-effect waves-light btn-small red btn" @click="action()"><i class="material-icons">delete</i></a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    action () {
      console.log(this.$parent)
      for (var m in this.$parent) {
        if (typeof this.$parent[m] === 'function' && m.match('testo')) {
          console.log(m)
        }
      }
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
  padding: 4.5%;
}
</style>

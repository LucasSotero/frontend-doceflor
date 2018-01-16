<template>
<div class="container">
  <div class="row margin">  </div>
    <a class="waves-effect waves-light btn" href="#/products/new">Novo</a>
  <table>
    <thead>
      <tr>
        <th>Código de barras</th>
        <th>Descrição</th>
        <th>Valor</th>
        <th class="center-padding">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products">
        <td>{{product[1]}}</td>
        <td>{{product[2]}}</td>
        <td>{{product[3]}}</td>
        <td class="right">
          <a class="waves-effect waves-light btn-small green btn" @click="stock(product[0])"><i class="material-icons">import_export</i></a>
          <a class="waves-effect waves-light btn-small blue btn" @click="details(product[0])"><i class="material-icons">edit</i></a>
          <a class="waves-effect waves-light btn-small red btn" @click="del(product[0])"><i class="material-icons">delete</i></a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>


<script>
import $ from 'jquery'
export default {
  name: 'product-show',
  computed: {
    products: function () {
      return this.$store.product.state.products
    }
  },
  mounted () {
    this.$store.product.dispatch('getAll')
  },
  methods: {
    del: function (id) {
      this.$store.product.dispatch('remove', id).then(() => {
      })
    },
    details: function (id) {
      this.$router.push('/products/view/' + id)
    },
    inventoryMovement: function (id) {
      $('.modal').modal()
      $('#inventoryMovement').modal('open')
      $('.trigger-modal').modal()
    },
    saveInventoryMovement: function () {
      alert('123')
    },
    stock: function (id) {
      this.$router.push('/products/details/' + id)
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

<template>
<div>
    <div class="row"></div>
  <v-modal :key1="key1">
    <slot>
  <form class="col s12"  @submit.prevent="save(product.id)">
  <div class="modal-content">
    <div class="row">
    <div class="row"></div>
        <div class="row">
            <div class="input-field col s12"><input id="last_name" type="text" class="validate" v-model="product.name" required><label for="last_name">Descrição</label></div>
            <div class="input-field col s5 "><input id="last_name" type="text" class="validate" v-model="product.barCode" required><label for="last_name">Código de Barras</label></div>
            <div class="input-field col s3 "><input id="last_name" type="number" class="validate" v-model="product.amount"  min="0" required><label for="last_name">Quantidade</label></div>
            <div class="input-field col s4 "><input id="last_name" type="number" class="validate" v-model="product.value" min="0" max="999999" required><label for="last_name">Valor Unitário</label></div>
        </div>
      </div>
  </div>
    <div class="modal-footer">
   <button type="submit" class=" modal-action modal-close waves-effect btn waves-green">Salvar</button>
  </div>
 </form>
    </slot>
  </v-modal>
  <div id="table">
  <table>
        <thead>
          <tr>
            <th  v-for="column in headerTable">{{column}}</th>
            <th class="center-padding">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in products">
            <td>{{p[1]}}</td>
            <td>{{p[2]}}</td>
            <td>{{p[3]}}</td>
            <td class="right">
              <a class="waves-effect waves-light btn-small blue btn" @click.prevent="modal(p[0])"><i class="material-icons">edit</i></a>
              <a class="waves-effect waves-light btn-small red btn" @click="del(p[0])"><i class="material-icons">delete</i></a>
            </td>
          </tr>
    </tbody>
  </table>
</div>
</div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'hello',
  data () {
    return {
      headerTable: ['Código de Barras', 'Descrição', 'Valor'],
      key1: 'modal1',
      updateProduct: {}
    }
  },
  computed: {
    products: function () {
      return this.$store.product.state.products
    },
    product: function () {
      return this.$store.product.state.product
    },
    updateOne: function () {
      let a = this.product
      return a
    }
  },
  created () {
    this.$store.product.dispatch('getAll')
  },
  methods: {
    modal: function (id) {
      this.$store.product.dispatch('getOne', id)
      $('.modal').modal()
      $('#' + this.key1).modal('open')
      $('.trigger-modal').modal()
    },
    save: function (id) {
      this.$store.product.dispatch('post', this.product)
      this.$store.product.dispatch('getAll')
    },
    del: function (id) {
      this.$store.product.dispatch('delete', id)
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

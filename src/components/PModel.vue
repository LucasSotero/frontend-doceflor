<template>
<div>
  <div class="row"></div>
  <v-modal :key1="key1">
    <span slot="content">
    <div class="row">
    <div class="row"></div>
    <form class="col s12">
        <div class="row">
            <div class="input-field col s12">
                <input id="last_name" type="text" class="validate" required>
                <label for="last_name">Descrição</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s5">
                <input id="last_name" type="text" class="validate" required>
                <label for="last_name">Código de Barras</label>
            </div>
            <div class="input-field col s3">
                <input id="last_name" type="number" class="validate"  min="0" required>
                <label for="last_name">Quantidade</label>
            </div>
            <div class="input-field col s4">
                <input id="last_name" type="number" class="validate" min="0" max="999999" required>
                <label for="last_name">Valor Unitário</label>
            </div>
        </div>
    </form>
  </div>
  </span>
  <span slot="footer"><a href="#/products" class=" modal-action modal-close waves-effect btn waves-green">Salvar</a></span>
  </v-modal>
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
      id: ''
    }
  },
  computed: {
    products: function () {
      return this.$store.product.state.products
    },
    product: function () {
      return this.$store.product.state.product
    }
  },
  created () {
    this.$store.product.dispatch('getAll')
  },
  methods: {
    modal: function () {
      $('.modal').modal()
      $('#' + this.key1).modal('open')
      $('.trigger-modal').modal()
      this.$store.product.dispatch('getOne', this.id)
      console.log(this.product)
      console.log()
    }
  }
}
</script>

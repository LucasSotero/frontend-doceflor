<template>
  <div class="card">
      <div class="container">
          <div class="row">
           <div class="input-field col s12">
                <div class="row">
                    <h5 class="center-align">Relatório de Vendas</h5>
                    <div class="row"></div>
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s2">
                                <input type="date" class="center-align datepicker">
                                <label >Período Inicial</label>
                            </div>
                            <div class="input-field col s2">
                                <input type="date" class="center-align datepicker">
                                <label>Período Final</label>
                            </div>
                            <div class="input-field col s2">
                                <select multiple v-model="selectMethod">
                                    <option v-for="method in methods" :value="method[0]">{{method}}</option>
                                </select>
                                <label>Método de Pagamento</label>
                            </div>
                            <div class="input-field col s3">
                                <select multiple v-model="selectProduct">
                                    <option v-for="product in products" :value="product[0]">{{product[1]}}</option>
                                </select>
                                <label>Produtos</label>
                            </div>
                            <div class="input-field col s3">
                                <select v-model="selectClient">
                                    <option v-for="client in clients" :value="client[0]">{{client[1]}}</option>
                                </select>
                                <label>Clientes</label>
                            </div>
                        </div>
                    </form>
                </div>
              </div>
           </div>
           <button class="btn" @click="generate()"></button>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      selectClient: null,
      selectProduct: null,
      selectMethod: null
    }
  },
  mounted () {
    this.$store.report.dispatch('getProducts').then(() => {
      console.log('teste')
    })
    this.$store.report.dispatch('getClients').then(() => {
      console.log('teste')
    })
    this.$store.report.dispatch('getMethods').then(() => {
      console.log('teste')
    })
    $(function () {
      $(document).ready(function () {
        $('select').material_select()
      })
      var diaSemana = [ 'Domingo', 'Segunda-Feira', 'Terca-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado' ]
      var mesAno = [ 'Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]
      var data = new Date()
      var hoje = diaSemana[data.getDay()] + ', ' + mesAno[data.getMonth()] + ' de ' + data.getFullYear()
      $('#dataPesquisa').attr('value', hoje)
      $('.datepicker').pickadate({
        monthsFull: mesAno,
        monthsShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
        weekdaysFull: diaSemana,
        weekdaysShort: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab' ],
        weekdaysLetter: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
        selectMonths: true,
        selectYears: true,
        clear: false,
        format: 'dd/mm/yyyy',
        today: 'Hoje',
        close: 'X',
        min: new Date(data.getFullYear() - 1, 0, 1),
        max: new Date(data.getFullYear() + 1, 11, 31),
        closeOnSelect: true
      })
      $('#dataPesquisa').click(function (event) {
        event.stopPropagation()
        $('.datepicker').first().pickadate('picker').open()
      })
    })
  },
  methods: {
    generate: function () {
      let p = []
      this.$store.report.state.products.forEach(element => {
        p.push(element[0])
      })
      let c = []
      this.$store.report.state.clients.forEach(element => {
        c.push(element[0])
      })
      let data = {
        methods: this.$store.report.state.methods,
        products: p,
        clients: c
      }
      return this.$store.report.dispatch('getReport', data).then(() => {
        console.log('teste')
      })
    }
  },
  computed: {
    products: function () {
      return this.$store.report.state.products
    },
    clients: function () {
      return this.$store.report.state.clients
    },
    methods: function () {
      return this.$store.report.state.methods
    },
    report: function () {
      return this.$store.report.state.report
    }
  }
}
</script>

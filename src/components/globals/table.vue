<template>
  <table class="highlight" align="center">
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
          <a v-for="(button, key) in buttons" :class="'waves-effect waves-light btn-small btn ' + button" @click="action(key, data[0])"><i class="material-icons">{{button}}</i></a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'table'
    },
    list: {
      type: Array,
      default: () => []
    },
    actions: {
      type: Array,
      default: () => []
    },
    buttons: {
      type: Array,
      default: () => []
    }
  },
  created () {
    for (var m in this.$parent) {
      if (typeof this.$parent[m] === 'function' && m.match(this.name)) {
        this.actions.push(m)
        m = m.replace(this.name, '')
        this.buttons.push(m.toLowerCase())
      }
    }
  },
  methods: {
    action (key, data) {
      console.log(this.$parent.computed)
      this.$parent[this.actions[key]](data)
    }
  }
}
</script>

<style>
.btn-small {
    height: 24px;
    line-height: 24px;
    padding: 0 0.5rem;
    color: white;
    margin:2px;
}
.center-padding {
  text-align: right;
  padding: 4.5%;
}
.edit {
  background-color: #2196f3 !important;
}
.subject {
  background-color: #4CAF50 !important;
}
.delete {
  background-color: #f44336 !important;
}
</style>
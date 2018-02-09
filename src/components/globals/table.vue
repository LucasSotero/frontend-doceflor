<template>
  <table class="highlight" align="center">
    <thead>
      <tr>
        <th v-for="(head, key) in header" :key="key">{{head}}</th>
        <th class="center-padding">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in list" :key="data[0]">
        <td v-for="i in data.length - 1" :key="data[i]">{{data[i]}}</td>
        <td class="right">
          <v-button-small  v-for="(button, key) in buttons" :key="key" :name="button"></v-button-small>
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
    header: {
      type: Array,
      default: () => []
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
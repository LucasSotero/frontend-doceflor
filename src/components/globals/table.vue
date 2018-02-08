<template>
  <table class="highlight" align="center">
    <thead>
      <tr>
        <th v-for="(head, index) in headers" :key="index">{{head}}</th>
        <th class="center-padding">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in list" :key="data[0]" >
        <td v-for="i in data.length - 1"  :key="i">{{data[i]}}</td>
        <td class="right">
          <v-button-small v-for="(button, key) in buttons" :key="key" :type="button" @click="action(key, data[0])"></v-button-small>
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
    headers: {
    },
    list: {
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
        console.log('m' + m)
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
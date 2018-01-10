<template>
<div v-if="header" id="table">
  <table>
        <thead>
          <tr>
            <th  v-for="column in header">{{column}}</th>
            <th class="center-padding">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="line in body">
            <td v-if="key != 0" v-for="(cell,key) in line">{{cell}}</td>
            <td class="right">
              <a class="waves-effect waves-light btn-small blue btn"><i class="material-icons">edit</i></a>
              <a class="waves-effect waves-light btn-small red btn"><i class="material-icons">delete</i></a>
            </td>
          </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'v-table',
  props: ['header', 'body']

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


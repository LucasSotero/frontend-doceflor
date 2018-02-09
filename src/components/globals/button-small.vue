<template>
  <a :class="'waves-effect waves-light btn-small btn ' +this.name"><i class="material-icons">{{name}}</i></a>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style>
.btn-small {
    height: 24px;
    line-height: 24px;
    padding: 0 0.5rem;
    color: white;
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

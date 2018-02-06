<template>
  <a class="waves-effect waves-light btn-small btn"><i class="material-icons">edit</i></a>
</template>

<script>
export default {
  props: ['type']
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
.btn-edit {
  background-color: #2196f3 !important;
}
.btn-subject {
  background-color: #4CAF50 !important;
}
.btn-delete {
  background-color: #f44336 !important;
}
</style>

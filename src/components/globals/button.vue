<template>
  <button type="submit" class="waves-effect waves-light btn-small btn" @click="action"><slot></slot></button>
</template>

<script>
export default {
  props: ['name'],
  methods: {
    action () {
      this.$emit('click')
    }
  }
}
</script>

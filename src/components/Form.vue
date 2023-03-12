<template>
  <div class="form">
    <div class="header">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainForm",
  props: {
    title: String
  }
}
</script>

<style scoped>

</style>
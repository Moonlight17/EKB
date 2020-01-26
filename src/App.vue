<template>
  <div id="app">
    <page />
  </div>
</template>

<script>
import page from './components/page.vue'

export default {
  name: 'app',
  components: {
    page
  }
}
</script>

<style>
body{
  background-color: #00688a;
}
#app {
}
</style>

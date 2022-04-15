<template>
  <div id="app">
    <h2>Axois</h2>
    <div id="one">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Left from './components/Left'
import Right from './components/Right.vue'
export default {
  name: 'App',
  components: {
    Left,
    Right
  }
}
</script>

<style lang="less">
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  background-color: khaki;
}
#one {
  display: flex;
}
</style>

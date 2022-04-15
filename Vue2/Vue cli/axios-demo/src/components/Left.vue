<template>
  <div class="container">
    <h4>Left</h4>
    <button @click="getInfo">
      发起Get请求
    </button>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: 'LeftA',
  methods: {
    async getInfo() {
      const { data: res } =
        await this.$http.get(
          '/api/get'
        )
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  min-height: 300px;
  background-color: gold;
  flex: 1;
}
</style>

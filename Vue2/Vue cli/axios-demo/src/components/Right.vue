<template>
  <div id="right">
    <h4>Right</h4>
    <button @click="postInfo">发起Post请求</button>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: 'RightA',
  methods:{
    async postInfo() {
       const {data :res} = await this.$http.post('/api/post',{name:'yhj',age:20})
       console.log(res);
    }
  }
}
</script>
<style lang="less" scoped>
#right {
  flex: 1;
  min-height: 300px;
  background-color: forestgreen;
}
</style>

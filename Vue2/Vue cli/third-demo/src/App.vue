<template>
<div>
   <h2 v-color="color">欢迎来到vue</h2>
   <hr>
  <div id="app">
    
    <Left>
      <template #title="scope">
        <!-- v-slot只能用在template标签（只起到包裹性作用）上，不能用在元素身上，可以用#来代替 简写#default -->
      <p v-color="'black'">这是插槽需要放的自定义内容</p> 
      {{ scope.msg }}
      </template>
    </Left>
  </div>
</div>
 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Left from './components/left.vue'
export default {
  data(){
    return {
      color:'pink'
    }
  },
  name: 'App',
  components: {
    HelloWorld,
    Left
  },
  // 私有属性的节点
  directives:{
    // 定义为color的指令 指向一个配置对象
    // color:{
    //   // 当指令第一次被绑定到元素身上就会触发bind函数
    //   bind(el,binding){
    //     // el就是绑定的元素
    //     // el.style.color = 'blue'
    //     // console.log(binding);
    //     el.style.color = binding.value
    //   }
    // }
    color(el,binding){
      el.style.color = binding.value
    }
  }
}
</script>

<style lang="less">
h2 {
  color: aqua;
  text-align: center;
}
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  width: 800px;
  height: 600px;
  margin: 10px auto;
  background-color: rgb(85, 14, 14);
  display: flex;
  justify-content: center;
  // align-items: center;
  padding: 20px 30px;
}
</style>

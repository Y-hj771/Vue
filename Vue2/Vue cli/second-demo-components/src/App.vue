<template>
  <div id="app">
    <h1>
      hahaha  
    </h1>
     <button @click="componentId = 'Left'">切换</button>
       <button @click="componentId = 'Right'">切换</button>
    <div id="one">
     
        <!-- 3.以标签形式，使用注册好的组件 -->
      <!-- <left :age="age" :user="user"></left>
      <right @change="tb"></right> -->
      <!-- component是组件的占位符 -->
      <!-- keep-alive可以让内部的组件缓存而不是销毁 -->
      <!-- 可以通过用keep-alive的include属性给指定组件缓存，用逗号隔开include="Left,Right"  exclude是排除谁不被缓存，不能和include同时使用-->
     <keep-alive>
     <component :is="componentId"></component>
     </keep-alive>
      
    </div>
    
   
  </div>
</template>

<script>
// 1.导入需要使用的组件
import Left from '@/components/left.vue'
import Right from '@/components/right.vue'
// 默认导出 固定写法
  export default {
    // 注意：vue组件中的data必须是函数 return{}可以定义数据
    data:function(){
      return {
        componentId:"Left"
      }
    },
    // methods:{
    //   // val 是子组件中传过来的this.num
    //   // tb(val){
    //   //   this.number = val
    //   // }
    //   one(){
    //     this.componentId = "Left"
    //   },
    //   two(){
    //     this.componentId = "Right"
    //   }
    // },
    // 2.注册组件
    components:{
      Left,
      Right
    }
  }
</script>

<style>
  #app {
    text-align: center;
    /* justify-content: space-between; */
    height: 2000px;
    background: firebrick;
    padding: 20px;
  }
  #one {
    display: flex;
  }
  
</style>

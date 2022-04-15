<template>
  <div id="one">
      <!-- 每一个slot都会有一个name属性 默认为default -->
      <!-- 为预留slot提供属性值，叫做作用域插槽  -->
      <slot name="title" msg="ni hao a vue"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #one {
        /* /* width: 200px; */
        height: 200px; 
        font-size: 20px;
        background-color: forestgreen;
        text-align: center;
        flex: 1;
    }
</style>
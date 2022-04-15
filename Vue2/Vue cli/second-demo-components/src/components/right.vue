<template>
   <div id="right">
       <h2>我是子组件2</h2> 
       {{num}}
       <button @click="add">+1</button>
        <!-- 
       
        <p>{{ fromstr }}</p>
        
        <Mycount :init='8'></Mycount> -->
   </div>
</template>
<style scoped>
    #right {
        flex: 1;
        /* width: 200px; */
        height: 500px;
        background-color: rebeccapurple;
    }
</style>
<script>
// 调用中间传值文件
import bus from '../eventbus'
export default {
    // 使用了name属性后组件名就是name的值
    name:"MyRight",
    data(){
        return {
            num:0,
            // fromstr:''
        }
    },
    // created(){
    //     // 使用$on接受值 作为接收方
    //     // bus.$on('share',(val)=>{
    //     //     this.fromstr = val;
    //     // })
    // },
    methods:{
        add(){
            this.num+=1;
            // 数据修改时 通过$emit()触发自定义事件
            // this.$emit('change',this.num)
        }
    }
}
</script>
import $ from 'jquery'
// 导入样式 在webpack中一切皆模块
import '@/css/index.css'
import '@/css/index.less'
// 导入图片 
import logo from '@/imgs/1.jpg'
// 给图片的src属性赋值
$('.box').attr('src',logo)

$(function (){
    // 奇数行变蓝
    $('li:odd').css('background-color','blue')
    // 偶数行变粉
    $('li:even').css('background-color','white')
})
// 定义装饰器函数
function info(target){
    target.info = 'Person info.'
}
@info
class Person {}
console.log(Person.info);
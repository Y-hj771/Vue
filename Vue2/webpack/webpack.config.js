const path = require('path')
// 左侧花括号代表解构赋值
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// 1.导入html-webpack-plugin这个插件，得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 2.new构造函数 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    // 指定要复制哪个页面
    template:'./src/index.html',
    // 制定复制出来的文件名和存放路径
    filename:'./index.html'
})

module.exports = {
    // mode代表webpack的运行模式 有两种模式：development和production
    mode:'development',
    // 保证错误的代码行和源代码的行保持一致
    // 在开发调试阶段建议吧devtool 改为eval-source-map
    // devtool:'eval-source-map',

    // 在实际发布的时候 建议改成这种形式或者直接关闭SourceMap 只定位错误行数不暴露源码
    devtool:'nosources-source-map',

    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'js/bundles.js'
    },

    // 3.插件的数组 将来webpack在运行时会加载并调用这些插件
    plugins:[htmlPlugin,new CleanWebpackPlugin()],

    // 自动打包后，自动打开浏览器
    devServer:{
        open:true,
        port:80,
        // 指定运行的主机地址
        host:'127.0.0.1'
    },

   module:{
    rules:[
        { test:/\.css$/,use:['style-loader','css-loader']},
        // 处理less的文件loader
        {
            test:/\.less$/,use:['style-loader','css-loader','less-loader']
        },
        // 处理图片的loader
        {
            test:/\.jpg|png|gif$/,use:'url-loader?limit-22229&outputPath=imgs'
            // limit为参数项，表示只有上传的图片大小不超过limit才会转换为base64
        },
        //使用babel-loader处理高级的js语法
        // 必须使用exclude指定排除性，因为node_modules目录下的第三方包不需要被打包
        {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
    ]
   },

   resolve:{
       alias:{
        // 告诉webpack 程序员写的代码中 @表示src 这一层目录
           "@":path.join(__dirname,'./src/')
       }
   }
}
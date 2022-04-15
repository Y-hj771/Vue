module.exports = {
    //声明babel可用的插件
    // 将来webpack在调用babel-loader的时候就会先加载plugins来使用
    plugins:[['@babel/plugin-proposal-decorators',{legacy:true}]]
}
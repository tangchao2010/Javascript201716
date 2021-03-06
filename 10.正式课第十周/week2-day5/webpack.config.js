//这个文件时跑在node环境下的；
// 配置webpack
//  webpack 是基于node的一个压缩包工具
// 当前这个文件会运行node环境中\
// 引入模块；
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
module.exports = {
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        // 会默认创建出一个dist文件夹
        path:path.resolve("./dist")
    },
    //
    module:{
        rules:[
            {test:/(\.js)$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']},// 从右向左进行解析
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'}
            // 如果图片大于就不再进行编译；
            ]// exclude : 排除node_modules;
    },
    plugins:[
        new HtmlWebpackPlugin({
            // 把src中index.html 编译到dist文件下；
            template:'./src/index.html'// 当前要编译的模板
        })
    ]


}

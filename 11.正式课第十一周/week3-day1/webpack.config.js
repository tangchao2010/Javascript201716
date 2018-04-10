//  运行在node环境中；
// npm run dev
// source
// build  : 生产环境
// dev  : development;  开发
// 配置文件发生改变，需要重新启动；
let  path = require('path');
let  HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/main.js',
    output:{
        filename:'dist.js',
        path : path.resolve('./dist')// 生成一个绝对路径；
    },
    module:{
        // rules:规则
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|jpeg|gif)$/,use:['url-loader']},
            {test:/\.vue$/,use:['vue-loader']},
        ]
    },
    plugins:[
        new  HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}

// entry:{
//     main:'./src/main.js',
//         main1:"./src/main1.js"
// },
// output:{
//     filename:'[name].js',
//         path : path.resolve('./dist')// 生成一个绝对路径；
// },
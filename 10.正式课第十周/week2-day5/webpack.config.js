//这个文件时跑在node环境下的；
// 配置webpack
//  webpack 是基于node的一个压缩包工具
// 当前这个文件会运行node环境中
let path = require('path');
module.exports = {
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        // 会默认创建出一个dist文件夹
        path:path.resolve("./dist")
    },
    // rules:[{}]

}

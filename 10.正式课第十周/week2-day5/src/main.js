//  安装webpack： 一般安装到当前项目中； 开发依赖；
//  npm install webpack  --save-dev : 默认安装是最新的版本；


// 在page.json 把script的属性进行修改；
// es6 语法；
import  * as  a  from  './b.js'
console.log(a.b);

// 把es6--> 编译成es5;
//  npm  install  babel-core  --save-dev  babel 的核心包；
//  npm  install babel-loader  --save-dev   babel的解析器；
// npm install  babel-preset-es2015 --save-dev : 把es6翻译成es5;

// es6
let  fn = a=> b =>c =>a+b+c;

// es7

// npm  install  babel-preset-stage-0 --save-dev
// 4个功能   stage-0
// 3个功能   stage-1


let  obj ={a:1};
let  obj1 = {b:2};
let  newObj = {...obj,...obj1};
console.log(newObj);

// require('./index.css')
import './index.css';
import './abc.less';
// 把css 编译到页面中；
// npm  install  css-loader  style-loader --save-dev
// less 编译到页面中；
// npm  install  less --save-dev
// npm  install  less-loader --save-dev


// webpack
// es6---> es5
// babel-core babel-loader  babel-preset-es2015
// es7--->es5
// babel-preset-stage-0

// css
// css-loader   style-loader
// less-css
// less      less-loader

//图片
// 图片会默认编译base64格式的字符串；减少了页面的请求；如果图片比较大；不进行编译；超过8K（8192b）；
// npm  install  file-loader  url-loader --save-dev


// webpack会给当前项目启动一个服务；实时监听你的代码；
//npm install webpack-dev-server --save-dev

//webpack : 最新版本配备最新webpack-dev-server;




//npm install webpack webpack-dev-server  babel-core bab
// el-loader  babel-preset-es2015  babel-preset-stage-0  css-loader  style-loader  less  less-loader  file-loader html-webpack-plugin    url-loader --save-dev




// css-loader : css 解析器；
// style-loader : 把编译出的css 插入到style中；







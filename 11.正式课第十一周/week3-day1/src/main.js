//  第三方可以省略./
// npm  install  vue-loader  vue-template-compiler  --save-dev

import  Vue from  'vue';
// 采用import导入，会默认导入runtime;这个不支持模板；

// compiler : 6K ;

// vue =  compiler + runtime
// let  home = {template:'<div>1233</div>',data(){
//
// }};
import  App  from './App.vue';

// console.log(App);
//  文件.vue;
new Vue({
    data:{},
    methods:{},
    // components:{home},
    // render : 把虚拟DOM渲染真实DOM；
    // 操作虚拟DOM效率非常高；
    render:h=>h(App)
    // render(h)=>h(App)
}).$mount('#app');


// render:function (createElement) {
//     // 模板 ； 创建出一个模板；把这个创建模板会把body中的app覆盖；、
//     // createElement : 是一个函数，创建出一个虚拟的DOM元素来；
//
//     createElement("div",'18888').removeChild();
//     // 创建出一个Vnode; Virtual Node
//     // 虚拟DOM是嫁接在JS和DOM之间的一个缓存；js就可以操作是虚拟的DOM；而且虚拟DOM操作起来比真实DOM快很多；
//     // template:
//     return  createElement("div",
//         ['hello',[
//             createElement("p","345")
//         ]]
//     )//函数；
// }




// 作为所有的路由管理者 这里存放路由映射的关系；
import  Vue from 'vue';
// let  Vue = require('vue');// common.js规范；
import  VueRouter from 'vue-router';// 插件
// 如果在common.js环境下调用vue 的插件，必须显式调用vue.use方法；
import home from  '../components/home.vue'
import list from  '../components/list.vue'

Vue.use(VueRouter);

let  router = new  VueRouter({})

export  default  new  VueRouter({
    //配置路由映射表
    routes:[
        {path:'/home',component:home},
        {path:'/list',component:list}
    ]
})

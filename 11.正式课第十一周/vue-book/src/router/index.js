import Vue from 'vue'
import Router from 'vue-router'

import  add from '../components/add.vue'
import  collect from '../components/collect.vue'
import  detail from '../components/detail.vue'
import  home from '../components/home.vue'
import  list from '../components/list.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {path:"/",component:home},
    {path:'/home',component:home},
    {path:'/list',component:list},
    {path:'/detail/:bid',component:detail,name:'/detail'},
    {path:'/collect',component:collect},
    {path:'/add',component:add},
    {path:'/*',redirect:'/home'}//  redirect: 默认指向一个路由路径；
  ]
})
// 1.导入vue组件，配置路由映射表
//

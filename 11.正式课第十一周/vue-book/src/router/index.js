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
    {path:'/home',component:home},
    {path:'/list',component:list},
    {path:'/detail',component:detail},
    {path:'/collect',component:collect},
    {path:'/add',component:add}
  ]
})
// 1.导入vue组件，配置路由映射表
//

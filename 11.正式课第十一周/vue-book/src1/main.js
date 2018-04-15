import  Vue  from  'vue';

import App from  './App.vue';

import store from './store'

// 实例；store管理公共数据的库；


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store,// 让APP的每一个组件都拥有store
  // render:h=>h(App)
})

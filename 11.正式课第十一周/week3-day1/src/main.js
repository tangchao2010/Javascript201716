import Vue from  "vue"
import App  from  './App.vue'

{}

import  router  from  './router/index.js'
import notify from  './plugin/notify.js'

Vue.use(notify);// use会默认调用插件上的install方法；
new Vue({
    data:{

    },
    router,
    render:h=>h(App)
}).$mount("#app");

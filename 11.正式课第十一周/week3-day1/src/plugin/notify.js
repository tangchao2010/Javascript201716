import  modal  from  './notify.vue';
let  notify = {};
notify.install = function (Vue,options={delay:3000}) {
    // VUe  是一个vue的构造器； Vue
    // $mount
    // $el
    // $emit
    // $on
    // $refs

    Vue.prototype.$notify = function (opt) {
        // console.log(100);
        options ={...options,...opt};
        // Vue.extend : 返回Vue的子类
        let  Vm = Vue.extend(modal);
        let v = new  Vm;
        let oDiv = document.createElement('div');
        document.body.appendChild(oDiv);
        // 先把div 放进页面中，然后进行挂载；
        v.$mount(oDiv);
        setTimeout(function () {
            console.log(v.$el);// modal;
            document.body.removeChild(v.$el);
        },options.delay);
    }
}
export default  notify;

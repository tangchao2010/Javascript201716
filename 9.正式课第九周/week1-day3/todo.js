let vm = new Vue({
    el: '#app',
    data: {
        todos:[{isSelected:false,title:"睡觉"},{isSelected:false,title:"吃饭"}],
        title:'',
        hash:"/all"
    },
    created(){
        window.addEventListener('hashchange', ()=>{
            // 当页面的hash值发生变化时，会触发这个事件；
           this.hash=window.location.hash.substr(1);
        });
    },
    methods:{
        add(){
           this.todos.push({isSelected:false,title:this.title});
           this.title='';
        },
        remove(val){
            this.todos = this.todos.filter(item=>item!==val);
        }
    }
});
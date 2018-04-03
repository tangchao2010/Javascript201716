let vm = new Vue({
    el: '#app',
    data: {
        todos:[{isSelected:false,title:"睡觉"},{isSelected:false,title:"吃饭"}],
        title:'',
        hash:"/all",
        cur:''
    },
    directives:{
      focus(el,bingling){
          // el : 当前元素；
          // console.log(bingling);//对象；
          if(bingling.value){
              el.focus()
          }
      }
    },
    created(){
        window.addEventListener('hashchange', ()=>{
            // 当页面的hash值发生变化时，会触发这个事件；
           this.hash=window.location.hash.substr(1);
        });
        window.location.hash=this.hash;
    },
    methods:{
        add(){
           this.todos.push({isSelected:false,title:this.title});
           this.title='';
        },
        remove(val){
            this.todos = this.todos.filter(item=>item!==val);
        },
        remember(val){
            this.cur = val;
        }
    },
    computed:{
        filterTodo(){
            // 所有的
            // console.log(1);
            if(this.hash==='/all')return this.todos;
            // 未完成
            if(this.hash==='/unfinish') return this.todos.filter(item=>!item.isSelected);
            // 完成的
            if(this.hash==='/finish') return this.todos.filter(item=>item.isSelected);
        },
        count(){
            return this.todos.filter(item=>!item.isSelected).length
        }
    }
});

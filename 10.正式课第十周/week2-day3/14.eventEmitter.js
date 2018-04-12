class EventEmitter{
    constructor(){
        // 私有属性
        this._event = {};
    }
    //  原型上的方法；发布订阅  （自定义事件）

    on(eventName,eventFn){
        if(!this._event[eventName]){
            this._event[eventName] = [eventFn];
        }else{
            this._event[eventName].push(eventFn);
        }
    }
    // 发布
    emit(eventName){
        if(this._event[eventName]){
            this._event[eventName].forEach(item=>item())
        }
    }
    // 移除
    remove(eventName,eventFn){
        if(this._event[eventName]){
            this._event[eventName]=this._event[eventName].filter(item=>item!==eventFn);
        }
    }
    // 仅绑定一次
    once(eventName,eventFn){
        let fn=()=>{
            // 只要fn进来之后；把它移出fn
            eventFn();
            // 执行过一次之火，马上移出；
            this.remove(eventName,fn);
        }
        this.on(eventName,fn);
    }
}
class A extends  EventEmitter{

}
let  f  = new EventEmitter();
function fn() {
    console.log("加班");
}
function eat() {
    console.log("eat dinner")
}
function tea() {
    console.log("泡茶")
}
f.on('下班',fn);
f.on('下班',eat)
f.once("home",tea)
f.emit("下班")
f.emit('home')
f.emit('home')

// setTimeout(function () {
//     emit("home")
// },2000)
//  订阅

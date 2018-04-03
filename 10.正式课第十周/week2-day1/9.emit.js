
//  发布订阅 ：  on ：订阅  emit : 发布
function boy() {
    this._event= {};
}
// 订阅
boy.prototype.on = function (eventName,eventFn) {
    // this --->boy1
    if(this[eventName]){
        this[eventName].push(eventFn)
    }else{
        this[eventName]  = [eventFn];
    }
}
// 发布；
boy.prototype.emit = function (eventName,...arg) {
    this[eventName].forEach(callBack=>callBack(...arg))
}
let boy1 = new  boy;
function play() {
    console.log("打球")
}
function code() {
    console.log("敲代码")
}
function cook(a,b) {
    console.log(a);
    console.log("做饭")
}
boy1.on("失恋",play);
boy1.on("失恋",code);
boy1.on("失恋",cook);
boy1.emit('失恋',1,2)
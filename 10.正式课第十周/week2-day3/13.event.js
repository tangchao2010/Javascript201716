let eventEmitter = require('events');
let  {inherits} = require('util');
// console.log(inherits);// 继承
// inherit(first,second): 让first这个类去继承second类；
//emitter ;
inherits(Girl,eventEmitter);
function Girl() {

};
let  girl = new Girl();
// 订阅
function fn() {
    console.log("很开心")
}
function happy() {
    console.log("别哭");
}
girl.on('恋爱',fn)
girl.once('恋爱',happy);// 仅执行一次；
girl.on('恋爱',happy);// 仅执行一次；
girl.removeListener('恋爱',happy);// 仅执行一次；

girl.emit('恋爱');// 发布
// girl.emit('恋爱');
// Girl.prototype.sum = function () {
//     console.log(1)
// }
// function Boy() {
//
// }
// inherits(Boy,Girl);
//
// let  boy = new Boy();
// boy.sum()



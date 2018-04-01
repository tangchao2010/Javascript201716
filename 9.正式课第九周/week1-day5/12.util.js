let  util = require('util');
function Parent() {
    this.b = 100;
}
Parent.prototype.sum = function () {
    console.log(1)
}
function Child() {
    // this --->this 指向实例
    Parent.call(this);
}
// 1.
util.inherits(Child,Parent);// 让child继承parent的公有方法；
let  a = new Child();
console.log(a.b);
a.sum();

// 2. call ： 继承私有；
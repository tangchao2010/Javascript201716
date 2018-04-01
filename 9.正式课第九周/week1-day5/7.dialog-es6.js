class Dialog{
    constructor(){
        this.title = function () {
            console.log("弹出框")
        }
    }
    static title() {
        console.log(1);
    }
    show(){
        console.log("显示")
    }
    hide(){
        console.log("隐藏")
    }
}
class A extends Dialog{// 继承了公有属性和私有属性；
    constructor(){
        super();
    }
}
// Dialog.title = function () {
//    console.log(1)
// }
// Dialog.title();
module.exports = {Dialog:Dialog}

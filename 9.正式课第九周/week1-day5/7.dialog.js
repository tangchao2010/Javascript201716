function Dialog() {
    this.title = function () {
        console.log("弹出框")
    }
}
Dialog.title = "请输入";
Dialog.prototype.show = function () {
    console.log("显示")
}
Dialog.prototype.hide = function () {
    console.log("隐藏")
}
module.exports = {Dialog:Dialog}

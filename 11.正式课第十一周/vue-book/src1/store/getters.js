export default {
  // 计算属性；computed；
   val(state){
     return state.count%2===0?"偶数":"奇数"
   }
}

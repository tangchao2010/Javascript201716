import * as Types from './mutations-type';

export default  {
  [Types.ADD_COLLECT](state){// 默认给当前的函数传进一个state这个对象；
  state.count +=1;
},
  min(state,num){
    state.count -=num;
  }
}


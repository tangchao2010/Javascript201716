import  Vue  from  'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
import mutations from './mountations';
import getters from  './getters'
Vue.use(Vuex);
const  state = {count:12};
export default new Vuex.Store({
  state,
  mutations,
  strict:true,
  getters,
  plugins:[logger()]
});


import   axios  from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';
//  这个模块获取所有的数据的模块；
axios.interceptors.response.use(function (response) {
  // Do something with response data
  // console.log(response);
  // axios的拦截器；所有的请求都会执行这个方法；把得到值进行处理，获取对向中data的属性值；
  return response.data;
});
export  let getSlider=()=>{
      return axios.get('/sliders');
      // axios 得到的数据都是放在对向的data属性中；
}

export  let getHotBook=()=>{
  return  axios.get('/hot')
}

export let getBooks=()=>{
  return  axios.get('/books')
}

export  let  removeBook = (id)=>{
  return  axios.get('/delete?id='+id);
}

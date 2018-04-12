
import   axios  from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';
//  这个模块获取所有的数据的模块；
axios.interceptors.response.use(function (response) {
  // Do something with response data
  // console.log(response);
  // axios的拦截器；所有的请求都会执行这个方法；把得到值进行处理，获取对向中data的属性值；
  return response.data;
});
// 获取轮播图数据
export  let getSlider=()=>{
      return axios.get('/sliders');
      // axios 得到的数据都是放在对向的data属性中；
}
// home  中获取热门图书
export  let getHotBook=()=>{
  return  axios.get('/hot');
}

//list  获取所有的图书
export let getBooks=(id)=>{
  return  axios.get('/books?page='+id)
}

export  let  getall =()=>{
    return axios.all([getSlider(),getBooks()])
}

// list  删除一本图书；
export  let  removeBook = (id)=>{
  return  axios.get('/delete?id='+id);
}

// detail  获取指定图书信息；

export  let  getOneBook = (bid)=>{
    return axios.get(`/getOne?id=${bid}`);
}
// detail 更新一本书的信息；

export  let updateBook=(data)=>{
  //第一个参数是路径，第二个是数据；
  console.log(data);// 对象
  axios.post('/update',JSON.stringify(data));
}

//  添加一本图书

export let addBook=(data)=>{
   axios.post('/add',JSON.stringify(data));
}

// 收藏一本图书

export  let  collectBook = (data)=>{
    axios.post('/collect',JSON.stringify(data))
}

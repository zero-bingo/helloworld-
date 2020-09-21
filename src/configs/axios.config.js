import axios from 'axios';
import { message } from 'antd'

//过滤请求
var axiosHeaders = null;
var BASEURL = 'http://localhost:8888';
// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // config.withCredentials = true;
    config.timeout = 15 * 1000;//请求响应时间;
    config.headers = axiosHeaders;
    return config
  },
  error => {
    return Promise.reject(error)
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data);
    } else {
      message(response.data.title,'error')
      return Promise.reject(response.data)
    }
  },
  error => {
    if (error && error.response) {
      let res = {}
      res.code = error.response.status
      res.msg = message.error(error.response.status, error.response) // 捕捉服务端的http状态码 定义在utils工具类的方法
      message(res.msg,'error')
      return Promise.reject(res)
    }
    let tip = error.message;
    if (error.message === 'Network Error') tip = '网络错误，请稍后再试';
    if (error.message.indexOf('timeout') !== -1) tip = '请求超时，请稍后再试';
    message(tip,'error');
    return Promise.reject(error)
  }
);
// --------暴露 request 给我们API 管理--------
export default function request(method, url, data, dataType) {
  function contentType(type, isToken) {
    if (isToken) {
      return { "content-type": type, "Authorization": "Bearer " + window.localStorage.getItem("FE-PC-adToken") };
    } else {
      return { "content-type": type };
    }
  };
  switch (dataType) { //fromData类型
    // case 'fromData':
    //   axiosHeaders = contentType("multipart/form-data", checkingNeedToken(url));
    //   data = fromDataTrim(data);
    //   break;
    default:
      axiosHeaders = contentType("application/json;charset=utf-8");
      break;
  };
  // 发送请求 封装 API的各种请求方式
  method = method.toLocaleLowerCase();
  switch (method) {
    case "post":
      return axios.post(url, data, { baseURL: BASEURL });
    case "delete":
      return axios.delete(url, { baseURL: BASEURL, params: data });
    case "put":
      return axios.put(url, data, { baseURL: BASEURL });
    // case "getblob":
    //   return axios.get(url, { baseURL: BASEURL, params: data, responseType: 'blob' }); // 导出数据必须返回类型改为blob
    default:
      return axios.get(url, { baseURL: BASEURL, params: data });
  };
}
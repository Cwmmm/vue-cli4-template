import axios from "axios";
import baseURL from "./base";
import qs from "qs";

//默认配置
axios.defaults.baseURL = baseURL;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.timeout = 1000 * 60;

//错误处理
function errorHandler(code) {
  //正式环境使用对应组件库message组件
  switch (code) {
    case 400:
      alert("请求错误");
      break;
    case 401:
      alert("未授权，请登录");
      break;
    case 403:
      alert("拒绝访问");
      break;
    case 404:
      alert("请求地址出错");
      break;
    case 408:
      alert("请求超时");
      break;
    case 500:
      alert("服务器内部错误");
      break;
    case 501:
      alert("服务未实现");
      break;
    case 502:
      alert("网关错误");
      break;
    case 503:
      alert("服务不可用");
      break;
    case 504:
      alert("网关超时");
      break;
    case 505:
      alert("HTTP版本不受支持");
      break;
    default:
      alert("网络异常");
  }
}

//axios实例
const instance = axios.create({
  //序列化
  paramsSerializer: function (params) {
    return qs.stringify(params);
  },
  withCredentials: true,
});

//请求拦截
instance.interceptors.request.use(
  (req) => {
    console.log(req);
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截
instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    error && error.response && errorHandler(error.response.status);
    return error;
  }
);

export default instance;

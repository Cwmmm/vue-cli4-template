let baseURL = "";
switch (process.env.NODE_ENV) {
  //开发环境使用devServer代理
  case "development":
    baseURL = "/api";
    break;
  //线上环境地址
  case "production":
    baseURL = "http://localhost:3000/api/";
    break;
}

export default baseURL;

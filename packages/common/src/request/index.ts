import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

axios.defaults.baseURL = 'https://h5.nicepq.com';
axios.defaults.timeout = 30000;
axios.interceptors.request.use(AxiosLogger.requestLogger);

// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    config.headers.common['X-Client'] = 'test';
    config.headers.post['Content-Type'] = 'application/json';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    if (response.status !== 200) {
      return Promise.reject(response);
    }
    const jsonResult = response.data;
    // console.log(`jsonResult======${JSON.stringify(jsonResult)}`);
    if (jsonResult.success) {
      return Promise.resolve(jsonResult.data);
    } else {
      return Promise.reject(jsonResult);
    }
  },
  function (error) {
    return Promise.reject(error);
  },
);

import axios from "axios";
// import whiteList from "../config/whiteList";
// import Store from "storejs"
import router from '../router'
// import store from "@/vuex";
axios.defaults.withCredentials = true;
axios.defaults.timeout = 5000;

axios.interceptors.request.use(
  config => {
    // if (!whiteList.some(one =>{config.url.indexOf(one) >= 0})) { //没匹配到白名单
      // config.headers.Authorization = Store.get('token');
      // Object.assign(config.headers, { token: Store.get('token') })
    // }
    return config;
  },
  error => {
    // store.dispatch('setTip', { type: 'err', msg: '没有网络' })
    alert('没有网络')
    console.log('没有网络')
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  res => {
    // if (!whiteList.some(one =>  res.config.url.indexOf(one) >=0 )) { //没匹配到白名单
      if(res.status == 200) {
        if(res.data.code != '200') {
          // 令牌过期、失效
          if(res.data.code == '401') {
            // 判断首页登录状态显示
            if(res.config.url.indexOf('collections') >=0) {
              // Store.remove('token')
            }else {
              // Store.remove('token')
              router.push('/my-account/login')
              // store.dispatch('setTip', { type: 'err', msg: '请重新登录' })
            }
          }else if(res.data.code == '404') {
            throw (res.data.msg)
          }else {
            // store.dispatch('setTip', { type: 'err', msg: res.data.msg })
            throw (res.data)
          }
        }

      } else {
        // store.dispatch('setTip', { type: 'warn', msg: res.data.message })
      }
    // }
    return res;
  },
  err => {
    // store.dispatch('setTip', { type: 'warn', msg: err.response.data.message })
    return Promise.reject(err);
  }
);

export default axios;

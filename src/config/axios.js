"use strict"

import Vue from "vue"
import Bus from "./bus"
import axios from "axios"

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)

//请求拦截
_axios.interceptors.request.use(
  function(config) {
    Bus.$emit("switch", "trunon")
    // Do something before request is sent
    return config
  },
  function(error) {
    Bus.$emit("switch", "trueoff")
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    Bus.$emit("switch", "trueoff")
    // Do something with response data
    return response
  },
  function(error) {
    Bus.$emit("switch", "trueoff")
    // Do something with response error
    return Promise.reject(error)
  }
)

Plugin.install = function(Vue) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        function Axios(options) {
          return new Promise((resolve, reject) => {
            let urlPrefix = ""
            _axios({
              method: options.method || "POST",
              url: urlPrefix + options.url,
              data: options.data || {}
            })
              .then(response => {
                let data = response.data
                let code = data.code.toLowerCase()
                if (code == "ok") {
                  resolve(data.result, data)
                } else {
                  reject(data.summary)
                }
                if (code == "warn" || code == "fail") {
                  this.$message.warning(data.summary)
                  return
                }
                if (code == "sys_error") {
                  this.$message.error("服务错误")
                  return
                }
              })
              .catch(() => {
                this.$message.error("服务器异常")
              })
          })
        }
        return Axios
      }
    },
    $axios: {
      get() {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin

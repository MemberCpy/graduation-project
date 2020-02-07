import store from '@/store'

// 简易使用localStorage
import Lockr from 'lockr'

import axios from 'axios'

const cache = {
  // 载入全部登录信息
  loadingCache: function() {
    if (Lockr.get('Admin-Token') && !axios.default.headers['Admin-Token']) {
      // 将用户信息放入缓存
      const userInfo = Lockr.get('loginUserInfo')
      if (userInfo) {
        store.commit('SET_USERONFO', userInfo)
      }
    }
  },
  // 请求和更新登录缓存
  updateAxiosCache: function() {
    axios.defaults.headers['Admin-Token'] = Lockr.get('Admin-Token')
    store.dispath('GetUserInfo')
  },
  // 移除 登录信息
  rmAxiosCache: function() {
    Lockr.rm('Admin-Token')
  }
}

export default cache
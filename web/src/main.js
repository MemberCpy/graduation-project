// 引入 babel-polyfill防止ie9和一些低版本浏览器不支持es6
import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 初始化css
import 'normalize.css/normalize.css'

// 引入element
import Element from 'element-ui'
Vue.use(Element)
import 'element-ui/lib/theme-chalk/index.css'

// 引入全局css
import '@/style/index.scss'

// 登录信息缓存 (暂不启用)
// import cache from '@/utils/cache'
// cache.loadingCache()

// 引入路由守卫
import '@/permission'

// 引入vue-bus 用于兄弟组件传值
import VueBus from 'vue-bus'
Vue.use(VueBus)

// 引入全局常用组件
import {
  Flexbox,
  FlexboxItem
} from '@/components/flexbox'
Vue.component('flexbox', Flexbox)
Vue.component('flexboxItem', FlexboxItem)

// 懒加载图片
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/img/send_img.png'),
  loading: require('@/assets/img/loading.gif'),
  attempt: 1
})

// 引入全局的过滤器
import * as filters from './filters'
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

// 时间过滤器
Vue.use(require('vue-moment'))
import moment from 'moment'
moment.locale('zh_cn')

Vue.config.productionTip = false

window.app = new Vue({
  router,
  store,
  data: {
    eventHub: new Vue()
  },
  render: h => h(App)
}).$mount('#app')

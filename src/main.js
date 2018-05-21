// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
// 默认跳转index
router.beforeEach((to, from, next) => {
    // let user = VueCookie.get('_uid');
    // console.log(user);
    // 如果用户不存在并且即将跳转的路由不是login 路由就指向login
 	if (to.path == '/') {
        next({ path: '/index' })
    }
    else {
        next()
    }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

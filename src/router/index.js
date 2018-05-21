import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'

// 首页
import index from '@/pages/index'
// 注册
import register from '@/pages/userManage/register'
// 订单相关
import orderDetail from '@/pages/orderManage/orderDetail'
// 收货人地址
import address from '@/pages/userManage/address'
// 收益页面
import income from '@/pages/userManage/income'
// 支付页
import pay from '@/pages/orderManage/pay'
// 订单超时页
import orderTimeOut from '@/pages/orderManage/orderTimeOut'
// 支付失败页
import payFail from '@/pages/orderManage/payFail'
// 订单详情页
import orderDetailInfo from '@/pages/orderManage/orderDetail'
// 物流详情页
import logisticsInfo from '@/pages/orderManage/logisticsInfo'
// 订单列表页
import orderList from '@/pages/orderManage/orderList'
// 订单商品麦光了
import goodsClean from '@/pages/orderManage/goodsClean'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: home,
        // 分销
        children: [{
                path: '/index',
                name: 'index',
                component: index
            },
            {
                path: '/address',
                name: 'address',
                component: address
            },
            {
                path: '/register',
                name: 'register',
                component: register
            },
            {
                path: '/pay',
                name: 'pay',
                component: pay
            },
            {
                path: '/orderTimeOut',
                name: 'orderTimeOut',
                component: orderTimeOut
            },
            {
                path: '/payFail',
                name: 'payFail',
                component: payFail
            },
            {
                path: '/goodsClean',
                name: 'goodsClean',
                component: goodsClean
            },
            {
                path: '/orderDetailInfo',
                name: 'orderDetailInfo',
                component: orderDetailInfo
            },
            {
                path: '/logisticsInfo',
                name: 'logisticsInfo',
                component: logisticsInfo
            },
            {
                path: '/orderList',
                name: 'orderList',
                component: orderList
            },
            {
                path: '/income',
                name: 'income',
                component: income
            }
        ]
    }]
})
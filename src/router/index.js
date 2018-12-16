import Vue from 'vue'
import Router from 'vue-router'
import {getToken} from '../api/auth'
// 功能组件
// @ 是 src 路径的别名，webpack 配置的
import Login from '@/views/Login'
import Home from '@/views/Home'
import Main from '@/views/Main'
import commodityList from '@/views/commodityManage/commodity-list'
import commodityAdd from '@/views/commodityManage/commodity-add'
import commodityEdit from '@/views/commodityManage/commodity-edit'
import commodityDetail from '@/views/commodityManage/commodity-detail'
import publishProductList from '@/views/publishManage/publishProduct-list'
import addPublishProduct from '@/views/publishManage/publishProduct-add'
import editPublishProduct from '@/views/publishManage/publishProduct-edit'
import publishProductDetail from '@/views/publishManage/publishProduct-detail'
import publishProductApprove from '@/views/publishManage/publishProduct-approve'
import totalStockList from '@/views/totalStockManage/totalStock-list'
import totalStockDetail from '@/views/totalStockManage/totalStock-detail'
import stockList from '@/views/stockManage/stock-list'
import godownEntry from '@/views/stockManage/godownEntry'
import stockDetail from '@/views/stockManage/stock-detail'
import manufacturerList from '@/views/manufacturerManage/manufacturer-list'
import manufacturerAdd from '@/views/manufacturerManage/manufacturer-add'
import manufacturerEdit from '@/views/manufacturerManage/manufacturer-edit'
import orderFormList from '@/views/orderFormManage/orderForm-list'
import orderFormDetail from '@/views/orderFormManage/orderForm-detail'
import marketList from '@/views/marketManage/market-list'
import marketDetail from '@/views/marketManage/market-detail'
import splitAccountList from '@/views/splitAccountManage/splitAccount-list'
import splitAccountDetail from '@/views/splitAccountManage/splitAccount-detail'
import clientList from '@/views/clientManage/client-list'
import customerSalesOrderDetail from '@/views/clientManage/customerSalesOrder-detail'
import myOrderForm from '@/views/accountManage/myOrderForm'
import myMarketDocList from '@/views/accountManage/myMarketDoc-list'
import myCoinsList from '@/views/accountManage/myCoins-list'
import myBeansList from '@/views/accountManage/myBeans-list'

// 这是在为 Vue 扩展实例成员
// 如果你没有这句话，那么你就无法在组件中使用 this.$route 和 this.$router
Vue.use(Router)

// 路由配置
const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Hello', // Hello 组件会渲染到 App.vue 根组件的 router-view 中
      redirect: '/main',
      component: Home
      // 通过配置子路由的方式让某个组件渲染到父路由组件
      // 1. 在父路由组件中添加 <router-view></router-view> 出口标记
      // 2. 在父路由中通过 children 来声明自路由
      //    children 是一个数组
      //    children 数组中配置一个一个子路由对象
      // 当你访问 users 组件的时候，则路由会先渲染它的父路由组件
      // 然后将 users 组件渲染到父路由的 router-view 标记中
    },
    {
      path: '/',
      name: '商品管理',
      component: Home,
      children: [
        {path: '/commodityList', component: commodityList, name: 'commodityList'},
        {path: '/commodityAdd', component: commodityAdd, name: 'commodityAdd'},
        {path: '/commodityEdit', component: commodityEdit, name: 'commodityEdit'},
        {path: '/commodityDetail', component: commodityDetail, name: 'commodityDetail'}
      ]
    },
    {
      path: '/',
      name: '发布管理',
      component: Home,
      children: [
        {path: '/publishProductList', component: publishProductList, name: 'publishProductList'},
        {path: '/addPublishProduct', component: addPublishProduct, name: 'addPublishProduct'},
        {path: '/editPublishProduct', component: editPublishProduct, name: 'editPublishProduct'},
        {path: '/publishProductDetail', component: publishProductDetail, name: 'publishProductDetail'},
        {path: '/publishProductApprove', component: publishProductApprove, name: 'publishProductApprove'}
      ]
    },
    {
      path: '/',
      name: '总库存管理',
      component: Home,
      children: [
        {path: '/totalStockList', component: totalStockList, name: 'totalStockList'},
        {path: '/totalStockDetail', component: totalStockDetail, name: 'totalStockDetail'}
      ]
    },
    {
      path: '/',
      name: '库存管理',
      component: Home,
      children: [
        {path: '/stockList', component: stockList, name: 'stockList'},
        {path: '/godownEntry', component: godownEntry, name: 'godownEntry'},
        {path: '/stockDetail', component: stockDetail, name: 'stockDetail'}
      ]
    },
    {
      path: '/',
      name: '厂商管理',
      component: Home,
      children: [
        {path: '/manufacturerList', component: manufacturerList, name: 'manufacturerList'},
        {path: '/manufacturerAdd', component: manufacturerAdd, name: 'manufacturerAdd'},
        {path: '/manufacturerEdit', component: manufacturerEdit, name: 'manufacturerEdit'}
      ]
    },
    {
      path: '/',
      name: '订单管理',
      component: Home,
      children: [
        {path: '/orderFormList', component: orderFormList, name: 'orderFormList'},
        {path: '/orderFormDetail', component: orderFormDetail, name: 'orderFormDetail'}
      ]
    },
    {
      path: '/',
      name: '销售管理',
      component: Home,
      children: [
        {path: '/marketList', component: marketList, name: 'marketList'},
        {path: '/marketDetail', component: marketDetail, name: 'marketDetail'}
      ]
    },
    {
      path: '/',
      name: '分账管理',
      component: Home,
      children: [
        {path: '/splitAccountList', component: splitAccountList, name: 'splitAccountList'},
        {path: '/splitAccountDetail', component: splitAccountDetail, name: 'splitAccountDetail'}
      ]
    },
    {
      path: '/',
      name: 'C端客户',
      component: Home,
      children: [
        {path: '/clientList', component: clientList, name: 'clientList'},
        {path: '/customerSalesOrderDetail', component: customerSalesOrderDetail, name: 'customerSalesOrderDetail'}
      ]
    },
    {
      path: '/',
      name: '账户管理',
      component: Home,
      children: [
        {path: '/myOrderForm', component: myOrderForm, name: 'myOrderForm'},
        {path: '/myMarketDocList', component: myMarketDocList, name: 'myMarketDocList'},
        {path: '/myCoinsList', component: myCoinsList, name: 'myCoinsList'},
        {path: '/myBeansList', component: myBeansList, name: 'myBeansList'}
      ]
    },
    {
      path: '/',
      name: '欢迎页面',
      component: Home,
      children: [
        {path: '/main', component: Main, name: 'Main'}
      ]
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/login' }
    }
  ]
})

// 1. 添加路由拦截器（导航钩子、守卫）
//    接下来所有的视图导航都必须经过这道关卡
//    一旦进入这道关卡，你得告诉路由守卫，
//    to 我要去哪里
//    from 我从哪儿来的
//    next 用来放行的
router.beforeEach((to, from, next) => {
  // 2.
  // 拿到当前请求的视图路径标识
  // 2.1 如果是登陆组件，则直接放行通过
  // 2.2 如果是非登陆组件，则检查 Token 令牌
  //    2.2.1 有令牌就过去
  //    2.2.2 无令牌，则让其登陆去
  if (to.path === '/login') {
    next()
  } else {
    // 检查是否具有当前登陆的用户信息状态
    if (!getToken(getToken('userType'))) { // 无令牌，则让其登陆去
      next({
        path: '/login'
      })
    } else { // 有令牌就允许通过
      next()
    }
  }
})

export default router

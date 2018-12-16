/**
 * @author: YanHuaKang
 * @2018/11/24
 * @Description:账户管理
 */
import {http} from '../api/http'

// 获取 厂商-我的孖孖数据
export const getManufacturerZiZiList = params => {
  return http.get('/admin/manufacturer/findmyorders/list/' + params.pageNum + '/' + params.pageSize + '?' + params.params).then(res => res.data)
}
// 获取孖豆上边数据
export const getMyBeansAmount = params => {
  return http.get('/vender/integral/getby/venderId').then(res => res.data)
}
// 获取孖豆下边数据
export const getMyBeansList = params => {
  return http.get('/vender/integral/detail/page/list/' + params.pageNum + '/' + params.pageSize + '?' + params.params).then(res => res.data)
}
// 获取孖蹦余额数据
export const getMyCoinsAmount = params => {
  return http.get('/admin/venderaccountquery/findMyAccount').then(res => res.data)
}
// 获取孖蹦下边数据
export const getMyCoinsList = params => {
  return http.get('/admin/venderaccountquery/page/list/' + params.pageNum + '/' + params.pageSize).then(res => res.data)
}
// 获取 厂商-我的销售单
export const getSalesFormList = params => {
  return http.get('/vender/sale/order/pagelist/' + params.pageNum + '/' + params.pageSize + '?' + params.params).then(res => res.data)
}

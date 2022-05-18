import request from '@/utils/request'
export default {
//创建订单
  createOrder(courseId) {
    return request({
      url: `/eduorder/order/createOrder/${courseId}`,
      method: 'post',
    })
  },
  getOrderInfo(orderId) {
    return request({
      url: `/eduorder/order/getOrder/${orderId}`,
      method: 'get',
    })
  },

    //生成微信支付二维码
    createNative(cid) {
        return request({
            url: '/eduorder/paylog/createNative/'+cid,
            method: 'get'
        })
    },
    //根据id获取订单支付状态
    queryPayStatus(cid) {
        return request({
            url: '/eduorder/paylog/queryPayStatus/'+cid,
            method: 'get'
        })
    }
  
}
import request from '@/utils/request'
export default {
//获取验证码
  submitLogin(member) {
    return request({
      url: `/educenter/member/login`,
      method: 'post',
      data:member
    })
  },
  //注册
  getLoginInfoByToken() {
    return request({
      url: `/educenter/member/getLoginInfo`,
      method: 'get'
    })
  },
  
}
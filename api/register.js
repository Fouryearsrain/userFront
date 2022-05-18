import request from '@/utils/request'
export default {
//获取验证码
  sendCode(phonenumber) {
    return request({
      url: `/edumsm/msm/send/${phonenumber}`,
      method: 'get'
    })
  },
  //注册
  registerMember(formItem) {
    return request({
      url: `/educenter/member/register`,
      method: 'post',
      data: formItem
    })
  },
  
}
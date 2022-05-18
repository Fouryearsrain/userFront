import request from '@/utils/request'
export default {
//上传文件
  update(info) {
    return request({
      url: `/educenter/member/update`,
      method: 'post',
      data:info
    })
  },
  
}
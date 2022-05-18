import request from '@/utils/request'
export default {
//查询两条banner
  getIndexData() {
    return request({
      url: `/eduservice/indexfront/index`,
      method: 'get'
    })
  }
}
import request from '@/utils/request'
export default {
//查询两条banner
  addLearnHistory(historyVo) {
    return request({
      url: `/eduservice/learnhistory/addLearnHistory`,
      method: 'post',
      data: historyVo
    })
  },
  //查询两条banner
  getLearnHistory() {
    return request({
      url: `/eduservice/learnhistory/getHistoryInfo`,
      method: 'get'
    })
  }
}
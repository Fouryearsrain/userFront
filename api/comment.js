import request from '@/utils/request'

export default {

  getPageList(page, limit, courseId) {
    return request({
      url: `/eduservice/comment/getcomment/${page}/${limit}`,
      method: 'get',
      params: {courseId}
    })
  },
  addComment(comment) {
    return request({
      url: `/eduservice/comment/savecomment`,
      method: 'post',
      data: comment
    })
  }
}
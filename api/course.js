import request from '@/utils/request'
export default {
//条件查询分页课程查询的方法
  getCourseIdByTitle(title) {
    return request({
      url: `/eduservice/coursefront/likeCourseQuery/${title}`,
      method: 'get'
    })
  },
  getPageCourseList(page, limit, searchObj) {   
    return request({
      url: `/eduservice/coursefront/getfrontcourselist/${page}/${limit}`,
      method: 'post',
      data:searchObj
    })
  },
  getHistoryCourseList(page, limit, searchObj) {   
    return request({
      url: `/eduservice/coursefront/gethistorycourselist/${page}/${limit}`,
      method: 'post',
      data:searchObj
    })
  },
  // 查询课程分类
  getAllSubject() {
    return request({
        url: `/eduservice/subject/getAllSubject`,
        method: 'get'
    })
},
getFrontCouseInfoById(courseId) {
    return request({
        url: `/eduservice/coursefront/getById/${courseId}`,
        method: 'get'
    })
}
}
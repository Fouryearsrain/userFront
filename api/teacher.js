import request from '@/utils/request'
export default {
  //讲师分页查询
  getPageTeacherList(page, limit) {
    return request({
      url: `eduservice/teacherfront/${page}/${limit}`,
      method: 'get'
    })
  },
  getById(teacherId) {
    return request({
      url: `eduservice/teacherfront/${teacherId}`,
      method: 'get'
    })
  },
  //查询喜欢的老师
  getTeacherIdByTitle(name) {
    return request({
      url: `/eduservice/teacherfront/likeTeacherQuery/${name}`,
      method: 'get'
    })
  },
}
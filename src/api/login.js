import request from '@/utils/request'

export default {
  // 登陆
  login: (username, password) => {
    return request.post('/api/v1/login', { 'name': username, 'password': password })
  },

  // 用户信息 （通过token获取用户信息）
  get_info: (token) => {
    return request.get(`/api/v1/users_info`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
  },

  // 退出
  logout: (params) => {
    return request.post('/user/logout')
  }

}

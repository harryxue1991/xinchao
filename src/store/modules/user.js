import login from '@/api/login'
import request from '@/utils/request'
import { getToken, setToken, removeToken } from '@/utils/auth'
const user = {
  state: {
    token: getToken(),
    user: '',
    avatar: '',
    roles: [],
    menu: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_MENU: (state, menu) => {
      state.menu = menu;
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.name.trim()
      return new Promise((resolve, reject) => {
        login.login(username, userInfo.password).then(response => {
          const data = response.data
          setToken(data.token)
          commit('SET_TOKEN', data.token),
          commit('SET_USER', data.userInfo)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }, token) {
      return new Promise((resolve, reject) => {
        login.get_info(token).then(response => {
          commit('SET_USER', response.data)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        login.logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          removeUser()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', ''),
        commit('SET_USER', '')
        removeToken()
        resolve()
      })
    },

    GetMenu({ commit }) {
      return new Promise(resolve => {
        request.get('/api/admin/menu/mymenus').then(res => {
          commit('SET_MENU', res.data)
          resolve(res.data)
        })
      })
    }
  }
}

export default user

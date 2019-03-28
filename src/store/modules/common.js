import request from '@/utils/request'

const common = {
  state: {
    statelist: [],
    loading: false,
  },
  mutations: {
    SET_STATELIST: (state, info) => {
      state.statelist = info
    },
    LOAD_CHANGE(state, type) {
      state.loading = type
    },
  },
  actions: {
    load_change: ({ commit, state }, type) => {
      commit('LOAD_CHANGE', type)
    },
    // 通用配置接口
    // async get_state_list({ commit, state }) {
    //   try {
    //     let res = await request.get('/common/tcm/state/statelist')
    //       sessionStorage.setItem('statelist', JSON.stringify(res.data))
    //       commit('SET_STATELIST', res.data)
    //       return res.data
    //   }
    //   catch (err) {
    //     console.log(err)
    //   }
    // }
  }
}

export default common

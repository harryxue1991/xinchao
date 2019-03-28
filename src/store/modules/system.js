import request from '@/utils/request'

const system = {
  state: {
    includeList: ''
  },
  mutations: {
    SET_INCLUDELIST: (state, data) => {
        state.includeList = data
    }
  },
  actions: {
    
  }
}

export default system
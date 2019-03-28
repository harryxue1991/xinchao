const excel = {
  state: {
    excelNum: 0
  },
  mutations: {
    SET_EXCELNUM: (state) => {
        state.excelNum += 1;
    }
  },
  actions: {
    excel_change: ({ commit }) => {
      commit('SET_EXCELNUM')
    },
  }
}

export default excel
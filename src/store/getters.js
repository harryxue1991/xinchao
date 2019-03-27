const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  user: state => state.user.user,
  roles: state => state.user.roles,

  configStatelist: state => state.common.statelist,
  
  includeList: state => state.system.includeList,
  loading: state => state.common.loading,

  // EXCEL
  excelNum: state => state.excel.excelNum,

  //menu
  menu: state => state.user.menu
}
export default getters

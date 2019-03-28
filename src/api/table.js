import request from '@/utils/request'


export default {
  // 统一接口get
  get_common: (url, params) => {
    return request.get(url, {params})
  },

  login: params => {
    return request.post('/api/v1/login', params)
  },


  // 上传图片
  uploadImg: (params) => {
    return request.post('/common/admin/attach/admin_upload', params)
  },
  // 上传excel
  excelUpload: (params) => {
    return request.post('/api/admin/systemmessage/upload_execl', params)
  }
}

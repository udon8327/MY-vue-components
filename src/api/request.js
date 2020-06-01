import axios from 'axios'

cosnt service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config=>{
  //發請求前做的一些處理，數據轉化，配置請求頭，設置token，設置loading等
  config.data=JSON.stringify(config.data);
  config.headers = {
    'Content-Type':'application/x-www-form-urlencoded'
  }
  return config
},error=>{
  Promise.reject(error)
})

// 回應攔截器
service.interceptors.response.use(response => {
  return response
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '錯誤請求'
        break;
      case 401:
        error.message = '未授權，請重新登錄'
        break;
      case 403:
        error.message = '拒絕訪問'
        break;
      case 404:
        error.message = '請求錯誤，未找到該資源'
        window.location.href = "/NotFound"
        break;
      case 405:
        error.message = '請求方法未允許'
        break;
      case 408:
        error.message = '請求超時'
        break;
      case 500:
        error.message = '伺服器端出錯'
        break;
      case 501:
        error.message = '網路未實現'
        break;
      case 502:
        error.message = '網路錯誤'
        break;
      case 503:
        error.message = '服務不可用'
        break;
      case 504:
        error.message = '網路超時'
        break;
      case 505:
        error.message = 'http版本不支持該請求'
        break;
      default:
        error.message = `連接錯誤${error.response.status}`
    }
  } else {
    if (JSON.stringify(error).includes('timeout')) {
      Message.error('伺服器回應超時，請刷新當前面頁')
    }
    error.message('連接伺服器失敗')
  }
  Message.error(err.message)
  return Promise.resolve(error.response)
})

export default service
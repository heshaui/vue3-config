import { ElMessage } from 'element-plus'
function apiConfig(api:any) {
    // 提交
    api.interceptors.request.use(
        (request:any) => {
            request.headers.Authorization = localStorage.token
            return request
        }
    )

    // 响应
    api.interceptors.response.use(
        (response:any) => {
            if (response.data) {
                if ((response.data.code == 0 || response.data.code == '0000') && response.data.msg === 'success') {
                    return Promise.resolve(response.data)
                } else if (response.data.message) {
                    ElMessage.error(response.data.message)
                    return Promise.reject(response.data)
                } else {
                    ElMessage.error(response.data.msg)
                    return Promise.reject(response.data)
                }
            } else {
                return Promise.resolve(response)
            }
        },
        (error:any) => {
            if (error && error.response) {
                ElMessage.error({
                    message: error.response.data?.msg ?? error
                })
                return Promise.reject(error)
            }
        }
  )
  return api
}

export default apiConfig

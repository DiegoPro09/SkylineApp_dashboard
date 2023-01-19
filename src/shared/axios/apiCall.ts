import axios from "axios"

export const baseURL = "http://localhost:8000/api/"

const apiCall = axios.create({
    baseURL
})

apiCall.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default apiCall

/*Middleware de request
apiCall.interceptors.request.use((config)=>{
    return {
        ...config,
        headers: {
            Authorization: "token"
        }
    }
})*/

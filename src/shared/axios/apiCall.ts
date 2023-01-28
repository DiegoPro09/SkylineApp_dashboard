import axios from "axios"
import { getSessionToken } from "../../modules/auth/AuthContext"

export const baseURL = "http://localhost:8000/api/"

const apiCall = axios.create({
    baseURL
})

apiCall.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default apiCall

apiCall.interceptors.request.use(function (config) {
    // Do something before request is sent
    return {
        ...config,
        headers:{
            Authorization: `bearer ${getSessionToken()}`
        }
    };
}, function (error) {
    // Do something with request error
    return Promise.reject(()=>{
        if(error.response.data){
            return error.response.data
        }
        return error
    });
});

// Add a response interceptor
apiCall.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error.response.data);
});
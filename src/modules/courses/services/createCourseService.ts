import apiCall from "../../../shared/axios/apiCall"

export interface createCourseReq {
    number:string,
    name:string
}

export const createCourseService = (data:createCourseReq) =>{
    return apiCall.post<any>('course', data)
}
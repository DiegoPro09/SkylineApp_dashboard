import apiCall from "../../../shared/axios/apiCall"

export interface createCldReq {
    course_id?: number,
    level_id?: number,
    division_id?: number,
    specialization_id?: number,
    year?:string
}

export const createCourseLevelDivisionService = (data:createCldReq) =>{
    return apiCall.post<any>('cld', data)
}
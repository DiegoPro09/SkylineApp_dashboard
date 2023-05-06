import { User } from "../../../domain/models/User"
import apiCall from "../../../shared/axios/apiCall"

export interface updateUserReq {
    firstName:string,
    lastName:string,
    phone:string,
    email:string,
    password:string,
    question:string,
    answer:string
}

export const updateUserService = (userId:any, data:updateUserReq) =>{
    return apiCall.put<any, User>(`user/update`, data)
}
import { User } from "../../../domain/models/User"
import apiCall from "../../../shared/axios/apiCall"

export interface signupReq {
    first_name:string,
    last_name:string,
    dni:string,
    phone:number,
    email:string,
    password:string,
    verif_password:string,
    question:string,
    answer:string
}

export interface AuthRes {
    user:User,
    token:string
}

export const signupService = (data:signupReq) =>{
    return apiCall.post<any>('register', data)
}
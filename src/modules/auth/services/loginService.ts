import { User } from "../../../domain/models/User"
import apiCall from "../../../shared/axios/apiCall"

export interface loginReq {
    email:string,
    dni:string,
    password:string,
    verif_password:string
}

export interface AuthRes {
    user:User,
    token:string
}

export const loginService = (data:loginReq) =>{
    console.log(data)

    return apiCall.post<any>('login',data)
}
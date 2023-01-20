import { User } from "../../../domain/models/User"
import apiCall from "../../../shared/axios/apiCall"

export interface loginReq {
    email:string,
    dni:string,
    password:string,
    verif_password:string
}

export interface AuthRes {
    data: {
        data:string,
        user: User
    }
}

export const loginService = (data:loginReq) =>{
    return apiCall.post<any, AuthRes>('login',data)
}
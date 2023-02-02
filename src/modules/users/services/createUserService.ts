import { RoleTypesEnum } from "../../../domain/enums/RoleTypes"
import apiCall from "../../../shared/axios/apiCall"

export interface createReq {
    first_name:string,
    last_name:string,
    dni:string,
    phone:number,
    email:string,
    password:string,
    verif_password:string,
    role_id?: RoleTypesEnum,
    state?: boolean
}

export const createUserService = (data:createReq) =>{
    console.log(data)
    return apiCall.post<any>('user/create', data)
}
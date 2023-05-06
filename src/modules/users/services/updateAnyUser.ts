import { RoleTypesEnum } from "../../../domain/enums/RoleTypes"
import { User } from "../../../domain/models/User"
import apiCall from "../../../shared/axios/apiCall"


export const updateAnyUserService = (userId:any, data:any) =>{
    console.log(data)
    return apiCall.put<any, User>(`user/update/${userId}`, data)
}
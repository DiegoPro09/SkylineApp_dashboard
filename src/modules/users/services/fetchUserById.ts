import { User } from "../../../domain/models/User"
import apiCall from "../../../shared/axios/apiCall"


export const fetchUserById = (id:string) =>{
    return apiCall.get<any, User>(`user/${id}`)
}
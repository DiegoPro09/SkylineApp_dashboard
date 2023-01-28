import { User } from "../../../domain/models/User"
import apiCall from "../../../shared/axios/apiCall"

export type temporal = { 
    data: {
        user: User
    }
}

export const fetchUserById = (userId:string) =>{
    return apiCall.get<any, temporal>(`assignament/${userId}`)
}
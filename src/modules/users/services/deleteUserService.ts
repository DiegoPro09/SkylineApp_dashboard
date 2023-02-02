import { User } from "../../../domain/models/User"
import apiCall from "../../../shared/axios/apiCall"

export const deleteUserService = (userId:User['id']) =>{
    return apiCall.delete<User, User>(`user/delete/${userId}`)
}
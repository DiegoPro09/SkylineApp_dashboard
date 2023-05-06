import { User } from "../../../domain/models/User"
import apiCall from "../../../shared/axios/apiCall"

export const fetchAllUsers = () => {
    const users = apiCall.get<User[],any>(`user`)
    return users
}
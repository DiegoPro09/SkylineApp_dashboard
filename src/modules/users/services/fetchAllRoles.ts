import { Roles } from "../../../domain/models/Roles"
import apiCall from "../../../shared/axios/apiCall"

export const fetchAllRoles = () => {
    const users = apiCall.get<Roles[],any>(`roles`)
    return users
}
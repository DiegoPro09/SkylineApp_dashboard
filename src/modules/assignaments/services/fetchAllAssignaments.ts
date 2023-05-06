import { Assignament } from "../../../domain/models/Assignaments"
import apiCall from "../../../shared/axios/apiCall"

export const fetchAllAssiugnaments = () => {
    const assignaments = apiCall.get<Assignament[],any>(`assignament`)
    return assignaments
}
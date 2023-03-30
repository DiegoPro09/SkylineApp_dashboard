import { Specialization } from "../../../domain/models/Specialization"
import apiCall from "../../../shared/axios/apiCall"

export const fetchAllSpecializations = () => {
    const levels = apiCall.get<Specialization[],any>(`specialization`)
    return levels
}
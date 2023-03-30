import { Division } from "../../../domain/models/Division"
import apiCall from "../../../shared/axios/apiCall"

export const fetchAllDivisions = () => {
    const divisions = apiCall.get<Division[],any>(`division`)
    return divisions
}
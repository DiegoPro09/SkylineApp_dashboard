import { Level } from "../../../domain/models/Level"
import apiCall from "../../../shared/axios/apiCall"

export const fetchAllLevels = () => {
    const levels = apiCall.get<Level[],any>(`level`)
    return levels
}
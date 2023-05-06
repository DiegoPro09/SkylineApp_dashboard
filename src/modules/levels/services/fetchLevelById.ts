import { Level } from "../../../domain/models/Level"
import apiCall from "../../../shared/axios/apiCall"

export const fetchLevelById = (id:string) =>{
    return apiCall.get<any, Level>(`level/${id}`)
}
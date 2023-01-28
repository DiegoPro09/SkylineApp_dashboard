import { Assignament } from "../../../domain/models/Assignaments"
import apiCall from "../../../shared/axios/apiCall"

export const updateAssignamentService = (assignamentId:any, data:Assignament) =>{
    return apiCall.put<any>(`assignament/${assignamentId}`,data)
}
import { Assignament } from "../../../domain/models/Assignaments"
import apiCall from "../../../shared/axios/apiCall"

export const deleteAssignamentService = (assignamentId:Assignament['id']) =>{
    return apiCall.delete<Assignament, Assignament>(`assignament/${assignamentId}`)
}
import { Assignament } from "../../../domain/models/Assignaments"
import apiCall from "../../../shared/axios/apiCall"

export const fetchAssignamentById = (id?:Assignament['id']) =>{
    return apiCall.get<Assignament['id'], Assignament>(`assignament/${id}`)
}

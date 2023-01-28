import { Assignament } from "../../../domain/models/Assignaments"
import apiCall from "../../../shared/axios/apiCall"

export interface createProductReq {
    name:string,
    company:string,
}

export const createAssignamentService = (data:Assignament) =>{
    return apiCall.post<Assignament>('assignament', data)
}
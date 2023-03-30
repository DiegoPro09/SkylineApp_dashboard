import { Course } from "../../../domain/models/Course"
import apiCall from "../../../shared/axios/apiCall"

export const fetchCourseById = (id:string) =>{
    return apiCall.get<any, Course>(`course/${id}`)
}
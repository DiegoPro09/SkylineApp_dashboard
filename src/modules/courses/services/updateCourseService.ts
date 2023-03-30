import { Course } from "../../../domain/models/Course"
import apiCall from "../../../shared/axios/apiCall"

export const updateCourseService = (courseId:any, data:Course) =>{
    return apiCall.put<any>(`course/${courseId}`,data)
}
import { Course } from "../../../domain/models/Course"
import apiCall from "../../../shared/axios/apiCall"

export const deleteCourseService = (courseId:Course['id']) =>{
    return apiCall.delete<Course, Course>(`course/${courseId}`)
}
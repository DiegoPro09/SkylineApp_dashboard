import { Course } from "../../../domain/models/Course"
import apiCall from "../../../shared/axios/apiCall"

export const fetchAllCourses = () => {
    const courses = apiCall.get<Course[],any>(`course`)
    return courses
}
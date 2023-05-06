import { useQuery } from "@tanstack/react-query"
import { Course } from "../../../../domain/models/Course"
import { fetchCourseById } from "../../services/fetchCourseById"
import { courseCacheKeys } from "../courseCacheKeys"

export const useCourseById = (id:string | undefined) => {
    const data = useQuery<Course,any>(
        courseCacheKeys.byId(id!),
        () => fetchCourseById(id!),
        {
            refetchOnWindowFocus:false,
            enabled: !!id
        }
    )

    return data
}
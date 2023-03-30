import { useQuery } from "@tanstack/react-query"
import { Course } from "../../../../domain/models/Course"
import { fetchAllCourses } from "../../services/fetchAllCourses"
import { courseCacheKeys } from "../courseCacheKeys"

export const useAllCourses = () => {
    const allCoursess = useQuery<Course[],any>(
        courseCacheKeys.all(),
        fetchAllCourses,
        {
            refetchOnWindowFocus:false,
        }
    )

    return allCoursess
}
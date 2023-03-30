import { useQuery } from "@tanstack/react-query"
import { fetchAllCac } from "../../services/fetchAllCourseAssignament"
import { cacCacheKeys } from "../courseCacheKeys"

export const useAllCac = () => {
    const allCac = useQuery<any>(
        cacCacheKeys.all(),
        fetchAllCac,
        {
            refetchOnWindowFocus:false,
        }
    )

    return allCac
}
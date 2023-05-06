import { useQuery } from "@tanstack/react-query"
import { fetchAllCld } from "../../services/fetchAllCourseLevelDivisions"
import { cldCacheKeys } from "../courseCacheKeys"

export const useAllCld = () => {
    const allCld = useQuery<any>(
        cldCacheKeys.all(),
        fetchAllCld,
        {
            refetchOnWindowFocus:false,
        }
    )

    return allCld
}
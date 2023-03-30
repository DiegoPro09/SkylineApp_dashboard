import { useQuery } from "@tanstack/react-query"
import { Level } from "../../../../domain/models/Level"
import { fetchAllLevels } from "../../services/fetchAllLevels"
import { levelCacheKeys } from "../levelCacheKeys"

export const useAllLevels = () => {
    const allLevels = useQuery<Level[],any>(
        levelCacheKeys.all(),
        fetchAllLevels,
        {
            refetchOnWindowFocus:false,
        }
    )

    return allLevels
}
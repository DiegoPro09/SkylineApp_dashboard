import { useQuery } from "@tanstack/react-query"
import { Level } from "../../../../domain/models/Level"
import { fetchLevelById } from "../../services/fetchLevelById"
import { levelCacheKeys } from "../levelCacheKeys"

export const useLevelById = (id:string | undefined) => {
    const data = useQuery<Level,any>(
        levelCacheKeys.byId(id!),
        () => fetchLevelById(id!),
        {
            refetchOnWindowFocus:false,
            enabled: !!id
        }
    )

    return data
}
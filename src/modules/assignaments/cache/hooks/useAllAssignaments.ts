import { useQuery } from "@tanstack/react-query"
import { Assignament } from "../../../../domain/models/Assignaments"
import { fetchAllAssiugnaments } from "../../services/fetchAllAssignaments"
import { assignamentsCacheKeys } from "../AssignamentCacheKeys"

export const useAllAssignaments = () => {
    const allAssignaments = useQuery<Assignament[],any>(
        assignamentsCacheKeys.all(),
        fetchAllAssiugnaments,
        {
            refetchOnWindowFocus:false,
        }
    )

    return allAssignaments
}
import { useQuery } from "@tanstack/react-query"
import { Assignament } from "../../../../domain/models/Assignaments"
import { fetchAssignamentById } from "../../services/fetchAssignamentById"
import { assignamentsCacheKeys } from "../AssignamentCacheKeys"

export const useAssignamentById = (id:string | undefined) => {
    const data = useQuery<Assignament>(
        assignamentsCacheKeys.byId(id!),
        () => fetchAssignamentById(id!),
        {
            refetchOnWindowFocus:false,
            enabled: !!id
        }
    )

    return data
}

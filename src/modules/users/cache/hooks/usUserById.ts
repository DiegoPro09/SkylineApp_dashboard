import { useQuery } from "@tanstack/react-query"
import { User } from "../../../../domain/models/User"
import { fetchUserById } from "../../services/fetchUserById"
import { userCacheKeys } from "../userCacheKeys"

export const useUserById = (id:string | undefined) => {
    const data = useQuery<User,any>(
        userCacheKeys.byId(id!),
        () => fetchUserById(id!),
        {
            refetchOnWindowFocus:false,
            enabled: !!id
        }
    )

    return data
}
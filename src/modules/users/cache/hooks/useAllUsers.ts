import { useQuery } from "@tanstack/react-query"
import { User } from "../../../../domain/models/User"
import { fetchAllUsers } from "../../services/fetchAllUsers"
import { userCacheKeys } from "../userCacheKeys"

export const useAllUsers = () => {
    const allUsers = useQuery<User[],any>(
        userCacheKeys.all(),
        fetchAllUsers,
        {
            refetchOnWindowFocus:false,
        }
    )

    return allUsers
}
import { useQuery } from "@tanstack/react-query"
import { Roles } from "../../../../domain/models/Roles"
import { fetchAllRoles } from "../../services/fetchAllRoles"
import { rolesCacheKeys } from "../rolesCacheKeys"

export const useAllRoles = () => {
    const allRoles = useQuery<Roles[],any>(
        rolesCacheKeys.all(),
        fetchAllRoles,
        {
            refetchOnWindowFocus:false,
        }
    )

    return allRoles
}
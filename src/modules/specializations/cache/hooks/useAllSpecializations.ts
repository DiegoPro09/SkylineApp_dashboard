import { useQuery } from "@tanstack/react-query"
import { Specialization } from "../../../../domain/models/Specialization"
import { fetchAllSpecializations } from "../../services/fetchAllSpecializations"
import { specializationCacheKeys } from "../specializationCacheKeys"

export const useAllSpecializations = () => {
    const allSpecializations = useQuery<Specialization[],any>(
        specializationCacheKeys.all(),
        fetchAllSpecializations,
        {
            refetchOnWindowFocus:false,
        }
    )

    return allSpecializations
}
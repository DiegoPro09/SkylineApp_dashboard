import { useQuery } from "@tanstack/react-query"
import { Division } from "../../../../domain/models/Division"
import { fetchAllDivisions } from "../../services/fetchAllDivisions"
import { divisionCacheKeys } from "../divisionCacheKeys"

export const useAllDivisions = () => {
    const allDivisions = useQuery<Division[],any>(
        divisionCacheKeys.all(),
        fetchAllDivisions,
        {
            refetchOnWindowFocus:false,
        }
    )

    return allDivisions
}
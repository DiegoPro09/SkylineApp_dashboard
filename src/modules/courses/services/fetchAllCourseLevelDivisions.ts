import { CLD } from "../../../domain/models/CLD"
import apiCall from "../../../shared/axios/apiCall"

export const fetchAllCld = () => {
    const cld = apiCall.get<CLD>(`cld`)
    return cld
}
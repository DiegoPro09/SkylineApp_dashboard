import apiCall from "../../../shared/axios/apiCall"

export const fetchAllCac = () => {
    const cld = apiCall.get<any>(`cac`)
    return cld
}
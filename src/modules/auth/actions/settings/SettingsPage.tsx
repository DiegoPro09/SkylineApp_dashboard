import { useLocation } from "react-router-dom"
import { AppContent } from "../../../app/layout/appContent/AppContent"
import { useUserById } from "../../../users/cache/hooks/usUserById"
import { useAuthContext } from "../../AuthContext"

export const SettingsPage = () => {
    const { loggedUser } = useAuthContext()
    const { data:data, isLoading } = useUserById(loggedUser?.id)
    const user = data?.data.user

    return (
        <AppContent firstname={user?.first_name} lastname={user?.last_name} title={'Configuración'}>
            <div>Settings</div>
        </AppContent>
    )
}

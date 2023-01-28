import { useLocation } from "react-router-dom"
import { AppContent } from "../app/layout/appContent/AppContent"
import { useAuthContext } from "../auth/AuthContext"
import { useUserById } from "../users/cache/hooks/usUserById"


function CoursesPage() {

    const { loggedUser } = useAuthContext()
    const { data:user, isLoading } = useUserById(loggedUser?.id)

    const location = useLocation()

    const { pathname } = location
    const pathnames = pathname.split('/').filter((item) => item)

    
    return (
        <AppContent firstname={user?.first_name} lastname={user?.last_name} title={pathnames[1].toUpperCase()}>
            <div>
                CoursesPage
            </div>
        </AppContent>
    )
}

export default CoursesPage
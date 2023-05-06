import { Layout } from "antd"
import { RoleTypesEnum } from "../../../../domain/enums/RoleTypes"
import { useAuthContext } from "../../../auth/AuthContext"
import SuperAdminSidebar from "../../../users/superAdmin/sidebar/SuperAdminSidebar"
import './Layout.css'

export const AppLayout:React.FC<{children:React.ReactNode}> = ({children}) => {

    const {isLoggedIn, loggedUser } = useAuthContext()
    console.log(loggedUser)

    return (
        <Layout title='Instituto Manuel de Falla' className="layout">
            {
                isLoggedIn && 
                loggedUser?.role_id === RoleTypesEnum.superadmin ? <SuperAdminSidebar/> :  ""
            }
            {children}
        </Layout>
    )
}
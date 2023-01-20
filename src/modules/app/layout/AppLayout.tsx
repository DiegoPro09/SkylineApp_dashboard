import { Layout } from "antd"
import './Layout.css'

export const AppLayout:React.FC<{children:React.ReactNode}> = ({children}) => {

    return (
        <Layout title='Instituto Manuel de Falla' className="layout">
            {children}
        </Layout>
    )
}
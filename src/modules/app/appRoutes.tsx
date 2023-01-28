import { Button } from "antd"
import axios from "axios"
import Login from "../auth/actions/login/Login"
import SignUp from "../auth/actions/signup/SignUp"
import { publicRoutes } from "../auth/appRoutes"
import { superadminRoutes } from "../users/userRoutes"

export interface AppRoutes {
    path:string,
    name:string,
    component:React.ReactNode,
    icon?:React.ReactNode
}

export const PUBLIC_ROUTES:AppRoutes[] = [
    {
        path:'/',
        name:'Login',
        component: <Login/>
    },
    {
        path: publicRoutes.login,
        name:'Login',
        component: <Login/>
    },
    {
        path: publicRoutes.signup,
        name:'Signup',
        component:<SignUp/>
    },
]

export const PRIVATE_ROUTES:AppRoutes[] = [
    ...superadminRoutes
]
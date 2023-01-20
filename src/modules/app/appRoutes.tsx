import { Button } from "antd"
import axios from "axios"
import Login from "../auth/actions/login/Login"
import SignUp from "../auth/actions/signup/SignUp"

export interface AppRoutes {
    path:string,
    name:string,
    component:React.ReactNode,
    icon?:React.ReactNode
}

const whow = () =>{
    axios.get('http://localhost:8000/api/user')
        .then(function(response){
            console.log(response.data.users)
        })
}

export const PUBLIC_ROUTES:AppRoutes[] = [
    {
        path:'/',
        name:'Login',
        component: <Login/>
    },
    {
        path:'/signup',
        name:'Signup',
        component:<SignUp/>
    },
]
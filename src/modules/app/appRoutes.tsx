import { Button } from "antd"
import axios from "axios"
import SignUp from "../auth/actions/SignUp"

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
        component:<>

            <Button onClick={whow}>asd</Button>

        </>
    },
    {
        path:'/signup',
        name:'Signup',
        component:<SignUp/>
    },
]
import { AppRoutes } from "../app/appRoutes";
import SignUp from "./actions/SignUp";
import { publicRoutes } from "./appRoutes";

export const authRoutesPublic:AppRoutes[] =[
    /*{
        path: publicRoutes.login,
        name: 'Login',
        component: <Login/>
    },*/
    {
        path: publicRoutes.signup,
        name:'signup',
        component:<SignUp/>
    },
    /*{
        path:'/lost-password',
        name:'Forgot password',
        component:<>forgot password</>
    },
    {
        path:'/change-password',
        name:'Change password',
        component:<>change pasword</>
    },*/
]
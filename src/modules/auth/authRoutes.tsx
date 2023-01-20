import { AppRoutes } from "../app/appRoutes";
import Login from "./actions/login/Login";
import SignUp from "./actions/signup/SignUp";
import { publicRoutes, routesSuperAdmin } from "./appRoutes";

export const authRoutesPublic:AppRoutes[] =[
    {
        path: publicRoutes.login,
        name: 'Login',
        component: <Login/>
    },
    {
        path: publicRoutes.signup,
        name:'signup',
        component:<SignUp/>
    },
    {
        path: routesSuperAdmin.scores,
        name:'scores',
        component:<>NOTAS</>
    }
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
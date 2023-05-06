import { AppRoutes } from "../app/appRoutes";
import { routesSuperAdmin } from "../auth/appRoutes";
import AreasPage from "./AreasPage";


export const areasRoutes:AppRoutes[] = [
    {
        path: routesSuperAdmin.area,
        name:'areas',
        component:<AreasPage/>
    },
]
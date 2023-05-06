import { AppRoutes } from "../app/appRoutes";
import { routesSuperAdmin } from "../auth/appRoutes";
import AssignamentsPage from "./AssignamentsPage";


export const assignamentRoutes:AppRoutes[] = [
    {
        path: routesSuperAdmin.assignaments,
        name:'users',
        component:<AssignamentsPage/>
    },
]

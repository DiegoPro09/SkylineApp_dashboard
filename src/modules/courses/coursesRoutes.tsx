import { AppRoutes } from "../app/appRoutes";
import { routesSuperAdmin } from "../auth/appRoutes";
import CoursesPage from "./CoursesPage";


export const coursesRoutes:AppRoutes[] = [
    {
        path: routesSuperAdmin.courses,
        name:'users',
        component:<CoursesPage/>
    },
]
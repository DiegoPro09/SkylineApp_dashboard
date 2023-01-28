import { AppRoutes } from "../../app/appRoutes";
import { assignamentRoutes } from "../../assignaments/assignamentsRoutes";
import { routesSuperAdmin } from "../../auth/appRoutes";
import SuperAdminPage from "./SuperAdminPage";

export const sadminRoutes:AppRoutes[] = [
    {
        path: routesSuperAdmin.users,
        name:'users',
        component:<SuperAdminPage />
    },
    ...assignamentRoutes
]

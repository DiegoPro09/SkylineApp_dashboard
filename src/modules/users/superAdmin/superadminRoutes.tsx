import { AppRoutes } from "../../app/appRoutes";
import { areasRoutes } from "../../areas/areasRoutes";
import { assignamentRoutes } from "../../assignaments/assignamentsRoutes";
import { SettingsPage } from "../../auth/actions/settings/SettingsPage";
import { routesSuperAdmin } from "../../auth/appRoutes";
import { coursesRoutes } from "../../courses/coursesRoutes";
import SuperAdminPage from "./SuperAdminPage";

export const sadminRoutes:AppRoutes[] = [
    {
        path: routesSuperAdmin.users,
        name:'users',
        component:<SuperAdminPage />
    },
    {
        path: routesSuperAdmin.settings,
        name:'settings',
        component:<SettingsPage />
    },
    ...assignamentRoutes,
    ...coursesRoutes,
    ...areasRoutes
]

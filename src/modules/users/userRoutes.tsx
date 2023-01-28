import { AppRoutes } from "../app/appRoutes";
import { sadminRoutes } from "./superAdmin/superadminRoutes";

export const superadminRoutes:AppRoutes[] = [
    ...sadminRoutes
]
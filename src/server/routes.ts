import AuthController from "../auth/auth.controller";
import { ControllerRoute } from "./types/controllerRoute";

const ServerRoutes : Array<ControllerRoute> = [
    {
        basePath: "/auth",
        controller: new AuthController()
    }
]

export default ServerRoutes;
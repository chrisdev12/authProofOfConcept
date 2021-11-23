import AuthController from "../auth/auth.controller";
import HealthCheckpointController from "./health.controller";
import { ControllerRoute } from "./types/controllerRoute";

const ServerRoutes : Array<ControllerRoute> = [
    {
        basePath: "/auth",
        controller: new AuthController()
    },
    {
        basePath: "/health",
        controller: new HealthCheckpointController()
    }
]

export default ServerRoutes;
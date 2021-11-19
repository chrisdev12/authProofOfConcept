import { Router } from "express";
import authController from "../auth/controller";

const authRoute: string = "/auth"

export default function serverRouter(app: Router) {
    app.use(authRoute, authController);
    app.get('/', (_, res) => {
        res.send('Well done!');
    });
}
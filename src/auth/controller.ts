import { Response, Router } from "express";
import CognitoService from "./services/cognitoService";
const cognitoService = new CognitoService();
const router = Router();

const signUpResource: string = "/signUp";

router.post(signUpResource, function (req: any, res: Response) {
    cognitoService.signUp({ email: req.body.email, password: req.body.password })
        .then((result) => res.send(result))
        .catch((err) => res.sendStatus(500))
});

export default router;
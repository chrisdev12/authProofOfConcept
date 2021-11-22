import { Router } from "express";

export default abstract class BaseController {
    protected router: Router;
    constructor(){
        this.router =  Router();
    }

    abstract getRoutes() : Router;
}
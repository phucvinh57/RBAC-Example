import { Router } from "express";
import hrController from "../controllers/hr.controller";
import hrRoleChecker from "../middlewares/hr.middleware";

const hrRouter: Router = Router()

hrRouter.get('/lever', hrRoleChecker.lever ,hrController.lever);
hrRouter.get('/bamboo-hr', hrRoleChecker.bambooHR, hrController.bambooHR)

export default hrRouter;
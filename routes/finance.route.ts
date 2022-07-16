import { Router } from "express";
import financeController from "../controllers/finance.controller";
import financeRoleChecker from "../middlewares/finance.middleware";

const financeRouter: Router = Router()

financeRouter.get('/xero', financeRoleChecker.xero ,financeController.xero);
financeRouter.get('/ADP', financeRoleChecker.ADP, financeController.ADP)

export default financeRouter;
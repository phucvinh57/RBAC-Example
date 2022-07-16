import { Router } from "express";
import authController from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const authRouter: Router = Router()

authRouter.post('/login', authController.login);
authRouter.post('/logout', authMiddleware ,authController.logout);

export default authRouter;
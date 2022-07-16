import { Express } from "express";
import hrRouter from "./hr.route";
import marketingRouter from "./marketing.route";
import financeRouter from "./finance.route";
import authRouter from "./auth.route";
import { authMiddleware } from "../middlewares/auth.middleware";

export default function route(app: Express) {
    app.use('/auth', authRouter)

    app.use('/hr', authMiddleware)
    app.use('/hr', hrRouter)

    app.use('/marketing', authMiddleware)
    app.use('/marketing', marketingRouter)

    app.use('/finance', authMiddleware)
    app.use('/finance', financeRouter)
}
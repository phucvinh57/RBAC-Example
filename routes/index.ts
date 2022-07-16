import { Express } from "express";
import hrRouter from "./hr.route";
import marketingRouter from "./marketing.route";
import financeRouter from "./finance.route";

export default function route(app: Express) {
    app.use('/hr', hrRouter)
    app.use('/marketing', marketingRouter)
    app.use('/finance', financeRouter)
}
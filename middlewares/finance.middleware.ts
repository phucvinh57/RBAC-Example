import { Request, Response, NextFunction } from "express";

const financeRoleChecker = {
    xero: function(req: Request, res: Response, next: NextFunction) {
        console.log("OK")
        next()
    },
    ADP: function(req: Request, res: Response, next: NextFunction) {
        console.log("OK")
        next()
    },
}

export default financeRoleChecker
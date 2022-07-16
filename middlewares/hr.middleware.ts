import { Request, Response, NextFunction } from "express";

const hrRoleChecker = {
    lever: function(req: Request, res: Response, next: NextFunction) {
        console.log("OK")
        next()
    },
    bambooHR: function(req: Request, res: Response, next: NextFunction) {
        console.log("OK")
        next()
    },
}

export default hrRoleChecker
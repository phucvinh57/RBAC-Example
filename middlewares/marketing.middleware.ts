import { Request, Response, NextFunction } from "express";

const marketingRoleChecker = {
    hubSpot: function (req: Request, res: Response, next: NextFunction) {
        console.log("OK")
        next()
    },
    googleAnalytics: function (req: Request, res: Response, next: NextFunction) {
        console.log("OK")
        next()
    },
    facebookAds: function (req: Request, res: Response, next: NextFunction) {
        console.log("OK")
        next()
    },
    googleAds: function (req: Request, res: Response, next: NextFunction) {
        console.log("OK")
        next()
    }
}

export default marketingRoleChecker
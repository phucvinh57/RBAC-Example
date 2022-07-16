import { Request, Response } from "express"

const marketingController = {
    hubSpot: function(req: Request, res: Response) {
        res.send("HubSpot Resources")
    },
    googleAnalytics: function(req: Request, res: Response) {
        res.send("Google Analytics Resources")
    }
    ,
    facebookAds: function(req: Request, res: Response) {
        res.send("Facebook Ads Resources")
    }
    ,
    googleAds: function(req: Request, res: Response) {
        res.send("Google Ads Resources")
    }
}

export default marketingController
import { Request, Response } from "express"

const hrController = {
    lever: function(req: Request, res: Response) {
        res.send("LEVER Resources")
    },
    bambooHR: function(req: Request, res: Response) {
        res.send("BambooHR Resources")
    }
}

export default hrController
import { Request, Response } from "express"

const financeController = {
    xero: function(req: Request, res: Response) {
        res.send("Xero Resources")
    },
    ADP: function(req: Request, res: Response) {
        res.send("ADP Resources")
    }
}

export default financeController
import { Request, Response, NextFunction } from "express";
import { FORBIDDEN_CODE } from "../constants";
import Exception from "../exceptions";

export const authMiddleware = function (req: Request, res: Response, next: NextFunction) {
    const userId: string | undefined = req.cookies['userId']
    if (!userId) {
        res.status(FORBIDDEN_CODE).json(new Exception("Please login first"))
        return
    }
    next()
}
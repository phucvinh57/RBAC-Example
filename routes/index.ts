import { Router, Request, Response } from "express";
import UserDto from "../models/dtos/user.dto";

const router: Router = Router()

router.get("/foo", function(req: Request, res: Response) {
    res.send(new UserDto(15, "Phuc Vinh"))
})

export default router;
import { Request, Response } from "express";
import { QueryError, RowDataPacket } from "mysql2";
import { BAD_REQUEST_CODE, INTERNAL_SERVER_ERROR_CODE, NOT_FOUND_CODE } from "../constants";
import Exception from "../exceptions";
import connection from "../models";
import UserDto from "../models/dtos/user.dto";

const authController = {
    login: function (req: Request, res: Response) {
        const userId: string | undefined = req.body.id;
        if (!userId) {
            res.status(BAD_REQUEST_CODE).json({ msg: "Missed user ID !" })
            return
        }
        connection.query(
            `SELECT id, name FROM user WHERE id = ?`,
            [userId],
            function (err: QueryError | null, result: RowDataPacket[]) {
                if (err) {
                    console.log(err)
                    res.status(INTERNAL_SERVER_ERROR_CODE).json(new Exception("Server error"))
                    return
                }
                if (result.length === 0) {
                    res.status(NOT_FOUND_CODE).json(new Exception("User not found"))
                    return
                }
                res.cookie('userId', result[0].id);
                const user = new UserDto(result[0])
                res.json(user)
            }
        );
    },
    logout: function (req: Request, res: Response) {
        res.clearCookie('userId');
        res.json({msg: "Logout successfully !"})
    }
}

export default authController;
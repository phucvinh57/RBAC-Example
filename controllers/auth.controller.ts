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
        connection.query(`
            SELECT
                user.id AS user_id,
                user.name AS user_name,
                role_name,
                resource_name,
                action_name
            FROM
                user
                LEFT JOIN (
                    SELECT
                        role.name AS role_name,
                        role.id AS role_id,
                        resource.name AS resource_name,
                        action.name AS action_name
                    FROM
                        permission
                        JOIN role ON role.id = permission.role_id
                        JOIN resource ON resource.id = permission.resource_id
                        JOIN action ON action.id = permission.action_id
                ) AS rbac ON user.role_id = rbac.role_id
            WHERE
                user.id = ?;
        `,
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
            
            const user = new UserDto(result)
            res.cookie('userId', user.id)
            res.cookie('role', user.name)
            res.cookie('permission', user.permission)
            res.json(user)
        });
    },
    logout: function (req: Request, res: Response) {
        res.clearCookie('userId');
        res.clearCookie('role');
        res.clearCookie('permission');
        res.json({msg: "Logout successfully !"})
    }
}

export default authController;
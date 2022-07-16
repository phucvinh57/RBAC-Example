import { Request, Response, NextFunction } from "express";
import { FORBIDDEN_CODE } from "../constants";
import Exception from "../exceptions";

function getPermission(req: Request) {
    const userPermission: { 
        resource: string | null, 
        action: string | null 
    }[] = req.cookies['permission'];
    return userPermission
}

const hrRoleChecker = {
    lever: function (req: Request, res: Response, next: NextFunction) {
        const userRole: string | null = req.cookies['role'];
        const userPermission = getPermission(req);

        if (!userRole) {
            res.status(FORBIDDEN_CODE).json(new Exception("Permission denied"))
            return
        }

        if(!userPermission.some(permission => 
            permission.action === 'access'
            && permission.resource?.toLowerCase() === 'lever'
        )) {
            res.status(FORBIDDEN_CODE).json(new Exception("Permission denied"))
            return
        }

        next()
    },
    bambooHR: function (req: Request, res: Response, next: NextFunction) {
        const userRole: string | null = req.cookies['role'];
        if (!userRole) {
            res.status(FORBIDDEN_CODE).json(new Exception("Permission denied"))
            return
        }
        
        const userPermission = getPermission(req);

        if(!userPermission.some(permission => 
            permission.action === 'access'
            && permission.resource?.toLowerCase() === 'bamboohr'
        )) {
            res.status(FORBIDDEN_CODE).json(new Exception("Permission denied"))
            return
        }

        next()
    },
}

export default hrRoleChecker
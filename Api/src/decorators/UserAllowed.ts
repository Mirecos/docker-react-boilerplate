import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';
import { CustomError } from '../types/CustomError';
import { Role } from '@prisma/client';
import { prisma } from '..';
import { checkPermission } from '../tools/CheckPermission';


function UserAllowed(role: Role){
    return (req: Request, res: any, next: NextFunction) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send(new CustomError('401', 'No token provided'));
        }
        jwt.verify(token, JWT_SECRET, async (err: any, decoded: any) => {
            if (err) {
                return res.status(401).send(new CustomError('401', 'Invalid token'));
            }
            let user_db = await prisma.user.findUnique({where: {id: decoded.id, token: token}});
            if(!user_db)return res.status(500).send(new CustomError('500', 'Token is valid but user not found'));
            if(!checkPermission(user_db.role, role))return res.status(405).send(new CustomError('405', 'Request is not allowed'));
            (req as any).user = user_db;
            next()
        });
    }
}


export default UserAllowed;
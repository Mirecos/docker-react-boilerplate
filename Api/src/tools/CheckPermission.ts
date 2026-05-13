import { Role } from "@prisma/client";

export function checkPermission(userRole: Role, allowedRole: Role): boolean {
    if(userRole === Role.SUPERADMIN) return true;
    if(allowedRole === userRole) return true;
    if(userRole == Role.ADMIN && allowedRole == Role.MEMBER) return true;
    return false
}
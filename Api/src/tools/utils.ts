import { Request } from "express";

export function extractUserInfo(req: Request){
    if((req as any).user){
        let userInfos = `[currentUser: (${((req as any).user as any).email})]`
        return userInfos
    }
    return "[currentUser: (unknown)]"
}

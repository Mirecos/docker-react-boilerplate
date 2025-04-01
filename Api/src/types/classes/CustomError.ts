import { Request } from "express";
import { extractUserInfo } from "../../tools/utils";
import { logger } from "../../config/logger";

export class CustomError{
    code: string;
    message: string;
    data: any;
    constructor(code: string, message: string, req: Request | null, options?: any) {
        logger.error(`${req === null?'':extractUserInfo(req)} ${message}`);
        this.code = code;
        this.message = message;
        if(options)this.data = options;
    }
}
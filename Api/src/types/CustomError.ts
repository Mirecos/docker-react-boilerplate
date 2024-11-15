export class CustomError{
    code: string;
    message: string;
    constructor(code: string, message: string) {
        console.error(`[ERROR]: ${message}`);
        this.code = code;
        this.message = message;
    }
}
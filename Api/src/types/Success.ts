export class Success{
    code=200;
    message: string;
    data: any;
    constructor(message: string, options?: any) {
        console.log(`[SUCCESS]: ${message}`);
        this.message = message;
        if(options)this.data = options;
    }
}
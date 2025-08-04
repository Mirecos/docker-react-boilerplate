import { PrismaClient } from '@prisma/client'
import express, { Express, Request, Response } from "express";
import { userRouter } from './routes/user';
import { port, hostname, CORS_ALLOW_ORIGIN } from './config/config';

export const prisma = new PrismaClient()

const app: Express = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', CORS_ALLOW_ORIGIN);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use(express.json());

app.use("/user", userRouter);

app.get("/" , (req: Request, res: Response) => {
    res.send("Api is running correctly.")
});

// Specifying hostname assumes to not open to public network
app.listen(port, hostname, () => {
    if(hostname === "0.0.0.0"){
        console.log(`[server]: Server is running at http://localhost:${port}`);    
    }else{
        console.log(`[server]: Server is running at http://${hostname}:${port}`);        
    }
});
import { PrismaClient } from '@prisma/client'
import express, { Express, Request, Response } from "express";
import { userRouter } from './routes/user';
import UserAllowed from './decorators/UserAllowed';

export const prisma = new PrismaClient()

const app: Express = express();
const port = parseInt(process.env.PORT || '3000');
const hostname = process.env.HOSTNAME || 'localhost';
app.use(express.json());

app.use("/user", userRouter);

app.get("/home" , (req: Request, res: Response) => {
    res.send("Hey")
});

// Specifying hostname assumes to not open to public network
app.listen(port, hostname, () => {
    if(hostname === "0.0.0.0"){
        console.log(`[server]: Server is running at http://localhost:${port}`);    
    }else{
        console.log(`[server]: Server is running at http://${hostname}:${port}`);        
    }
});
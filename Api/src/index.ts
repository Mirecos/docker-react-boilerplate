import express, { Express, Request, Response } from "express";
import { userRouter } from './routes/user';
import { port, hostname } from './config/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient } from '../prisma/generated/client';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
export const prisma = new PrismaClient({ adapter });
const app: Express = express();
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
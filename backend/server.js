import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import transactionRoutes from './routers/transactionRoutes.js'

import connectDB from './config/db.js'

dotenv.config()
await connectDB();


const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/transactions/',transactionRoutes);

app.listen(
    process.env.PORT,()=>{
        console.log("Listening at port: "+ process.env.PORT)
    })



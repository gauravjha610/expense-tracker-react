import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import transactionRoutes from './routers/transactionRoutes.js'
import authRoutes from './routers/authRoutes.js'

import connectDB from './config/db.js'


dotenv.config()
await connectDB();


const app = express();

app.use(express.json());

app.use(cors({
    // origin: "http://localhost:3000", 
    origin: "https://expense-tracker-app123.netlify.app", 
    credentials:true
}));

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Backend running');
});
app.use('/api/auth',authRoutes)
app.use('/api/transactions/',transactionRoutes);


app.listen(
    process.env.PORT,()=>{
        console.log("Server is running at port: "+ process.env.PORT)
    })



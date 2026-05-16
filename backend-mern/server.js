import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import transactionRoutes from './routers/transactionRoutes.js'

//app 
const app = express()

//JSON
app.use(express.json());

//Cors
app.use(cors());

//env config
dotenv.config()

//Routers

app.use('/api/transactions/',transactionRoutes);


//Database connection

mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("Database Connected Successfully")
            app.listen(process.env.PORT,()=>{
                console.log("Listening at port: "+ process.env.PORT)
            })
        })
        .catch((error)=>{
            res.status(500).json({message:error.message})
        })


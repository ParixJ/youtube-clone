import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './Routes/user.js'
import bodyParser from 'body-parser';

const app=express()
app.use(cors())
dotenv.config()

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.use(bodyParser.json())

app.use('/user',userRoutes)

const PORT= process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})

const DB_URL = process.env.CONNECTION_URL

mongoose.connect(DB_URL,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log('MongoDB Database Connected')
}).catch((error)=>{
    console.log(error)
})
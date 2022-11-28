import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import tokenRouter from './routes/tokenRoutes.js'

//Server config
const tokenServer = express() 
dotenv.config()
const PORT = process.env.PORT || 5000  


//Middlewares 
tokenServer.use(express.json())
tokenServer.use(cors({
    methods : ["GET" ,"POST"] , 
    origin : "http://localhost:3000" , 
    credentials : true , 
}))


//App Routes Middlewares
tokenServer.use('/token' ,tokenRouter)

//Listener
export default tokenServer
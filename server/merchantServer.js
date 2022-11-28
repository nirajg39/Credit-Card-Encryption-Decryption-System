import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
// import tokenRouter from './routes/tokenRoutes.js'
import merchantRouter from './routes/merchantRoutes.js'

//Server config
const merchantServer = express() 
dotenv.config()
const PORT = process.env.PORT || 8000  


//Middlewares 
merchantServer.use(express.json())
merchantServer.use(cors({
    methods : ["GET" ,"POST"] , 
    origin : "http://localhost:3000" , 
    credentials : true , 
}))


//App Routes Middlewares
merchantServer.use('/merchant' ,merchantRouter)

//Listener
export default merchantServer
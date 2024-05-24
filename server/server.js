import express from 'express'
import { app,server } from './socket/socket.js'
import dotenv from 'dotenv'
import authRouter from './routes/auth.routes.js'
import messageRouter from './routes/message.routes.js'
import userRouter from './routes/user.routes.js'
import connectToDB from './db/connectToMongoDB.js'
import cookieParser from 'cookie-parser'



dotenv.config()
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 5000

app.use('/api/auth',authRouter)

app.use('/api/messages',messageRouter)
app.use('/api/users',userRouter)

app.use('/api/auth',authRouter)

server.listen(5000,()=>{
    console.log(`Server is running on port ${PORT}`)
        connectToDB()
    
})
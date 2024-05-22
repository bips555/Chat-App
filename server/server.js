import express from 'express'
const app = express()
import dotenv from 'dotenv'
import authRouter from './routes/auth.routes.js'
dotenv.config()
const PORT = process.env.PORT || 5000

app.use('/api/auth',authRouter)

app.listen(5000,()=>{
    console.log(`Server is running on port ${PORT}`)
})
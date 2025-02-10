import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import Cors from 'cors'
import cookieParser from 'cookie-parser'
import userRoute from './routes/user.route.js'
import captionRouter from './routes/captain.routes.js'

const app = express()


// middlerwares
app.use(Cors())
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended : true , limit: '16kb'} ))
app.use(cookieParser())
app.use(Cors({ origin: 'http://localhost:5173' }));



// routes
// app.get('/', (req,res) => {
//     res.send("hello express")
// })

app.use('/api/v1/users',userRoute)
app.use('/api/v1/captains',captionRouter)



export default app


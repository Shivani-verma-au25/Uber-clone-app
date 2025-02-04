import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import Cors from 'cors'
import userRoute from './routes/user.route.js'


const app = express()


// middlerwares
app.use(Cors())
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended : true , limit: '16kb'} ))



// routes
app.get('/', (req,res) => {
    res.send("hello express")
})

app.use('/api/v1/users',userRoute)




export default app


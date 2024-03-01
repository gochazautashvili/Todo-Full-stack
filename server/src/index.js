import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import UserRouter from './routes/User.Router.js'
import TodoRouter from './routes/Todo.Router.js'
import auth from './middleware/auth.js'
import compression from 'compression'

const app = express()

app.use(express.json())
app.use(cors())
app.use(compression())

app.use('/auth', UserRouter)
app.use('/todo', auth, TodoRouter)

app.get('/', (req, res) => {
    res.send('API HOME PAGE')
})

const PORT = process.env.PORT || 8000

mongoose.connect(process.env.DATA_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running port: ${PORT}`);
    })
}).catch(err => {
    console.log(err);
})
import * as dotenv from 'dotenv'
import * as mongoose from 'mongoose'
import * as express from 'express'
import * as routes from './routes/index'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import * as morgan from 'morgan'

// env vars
dotenv.config()

// database
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Connected to database successfully'))

// app
const app = express()
app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)

// server
const port = parseInt(process.env.PORT, 10) || 3001

app.listen(port, () => console.log(`Server is running on port: ${port}`))

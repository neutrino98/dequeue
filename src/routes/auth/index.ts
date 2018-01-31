import * as express from 'express'
import { login } from '../../controllers/login'
import { register } from '../../controllers/register'

const authRouter = express.Router()

authRouter.post('/login', login)
authRouter.post('/register', register)

export = authRouter

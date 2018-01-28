import * as express from 'express'
const authRouter = express.Router()

import { login } from '../../controllers/login'

import { register } from '../../controllers/register'

authRouter.post('/login', login)

authRouter.post('/register', register)

export = authRouter

import * as express from 'express'
const authRouter = express.Router()

import { login } from '../../controllers/login'

import { signup } from '../../controllers/signup'

authRouter.post('/login', login)

authRouter.post('/signup', signup)

export = authRouter

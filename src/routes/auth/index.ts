import * as express from 'express'
const authRouter = express.Router()

import { login } from '../../controllers/login'
import { registerUser } from '../../controllers/registerUser'
import { registerDoctor } from '../../controllers/registerDoctor'

authRouter.post('/login', login)
authRouter.post('/register/user', registerUser)
authRouter.post('/register/doctor', registerDoctor)

export = authRouter

import * as express from 'express'
const authRouter = express.Router()
import { checkRole, checkExistEmail } from '../../middlewares/signup'

import { login } from '../../controllers/login'

import { signup } from '../../controllers/signup'

authRouter.post('/login', login)

authRouter.post('/signup', checkRole, checkExistEmail, signup)

export = authRouter

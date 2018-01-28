import * as express from 'express'
const authRouter = express.Router()

import { login } from '../../controllers/login'

<<<<<<< HEAD
import { signup } from '../../controllers/signup'

authRouter.post('/login', login)

authRouter.post('/signup', signup)
=======
import { register } from '../../controllers/register'

authRouter.post('/login', login)

authRouter.post('/register', register)
>>>>>>> api

export = authRouter

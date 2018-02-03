import * as express from 'express'
import { profile } from '../../controllers/profile'
import { getUsers } from '../../controllers/getUsers'

const userRouter = express.Router()

userRouter.get('/users/:id', profile)
userRouter.get('/users', getUsers)

export = userRouter

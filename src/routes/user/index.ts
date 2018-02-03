import * as express from 'express'
import { profile } from '../../controllers/profile'
import { getUsers } from '../../controllers/getUsers'

const userRouter = express.Router()

userRouter.get('/user/:id', profile)
userRouter.get('/user', getUsers)

export = userRouter

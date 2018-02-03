import * as express from 'express'
import { profile } from '../../controllers/profile'
import { getUsers } from '../../controllers/getUsers'
import checkAuth from '../../middlewares/authCheck'

const userRouter = express.Router()

userRouter.get('/users/:id', profile)
userRouter.get('/users', checkAuth, getUsers)

export = userRouter

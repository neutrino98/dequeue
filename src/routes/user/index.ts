import * as express from 'express'
import { profile } from '../../controllers/profile'
import { getDoctors } from '../../controllers/getDoctors'

const userRouter = express.Router()

userRouter.get('/user/:id', profile)
userRouter.get('/doctor', getDoctors)

export = userRouter

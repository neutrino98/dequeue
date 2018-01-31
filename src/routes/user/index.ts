import * as express from 'express'
import { profileUser } from '../../controllers/profileUser'

const userRouter = express.Router()

userRouter.get('/user/:id', profileUser)

export = userRouter

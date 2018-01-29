import * as express from 'express'
const userRouter = express.Router()

import { profileUser } from '../../controllers/profileUser'

userRouter.get('/user/:id', profileUser)

export = userRouter

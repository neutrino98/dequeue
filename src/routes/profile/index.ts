import * as express from 'express'
const profileRouter = express.Router()

import { profileUser } from '../../controllers/profileUser'
import { profileDoctor } from '../../controllers/profileDoctor'

profileRouter.get('/user/:id', profileUser)
profileRouter.get('/doctor/:id', profileDoctor)

export = profileRouter

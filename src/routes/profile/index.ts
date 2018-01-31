import * as express from 'express'
import { profile } from '../../controllers/profile'

const profileRouter = express.Router()

profileRouter.get('/profile/:id', profile)
export = profileRouter

import * as express from 'express'
const doctorRouter = express.Router()

import { profileDoctor } from '../../controllers/profileDoctor'
import { getDoctors } from '../../controllers/getDoctors'

doctorRouter.get('/doctor/:id', profileDoctor)
doctorRouter.get('/doctor', getDoctors)

export = doctorRouter

import * as express from 'express'
import { profileDoctor } from '../../controllers/profileDoctor'
import { getDoctors } from '../../controllers/getDoctors'

const doctorRouter = express.Router()

doctorRouter.get('/doctor/:id', profileDoctor)
doctorRouter.get('/doctor', getDoctors)

export = doctorRouter

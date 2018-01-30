import * as express from 'express'
const queueRouter = express.Router()

import { createDoctorAppointment } from '../../controllers/сreateDoctorAppointment'

queueRouter.post('/queue', createDoctorAppointment)

export = queueRouter

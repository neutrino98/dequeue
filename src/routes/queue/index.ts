import * as express from 'express'
import { createDoctorAppointment } from '../../controllers/сreateDoctorAppointment'

const queueRouter = express.Router()

queueRouter.post('/queue', createDoctorAppointment)

export = queueRouter

import * as express from 'express'
import { createDoctorOrder } from '../../controllers/сreateDoctorOrder'
import { doctorRecords, userRecords } from '../../controllers/getMedicalRecords'

const queueRouter = express.Router()

queueRouter.post('/queue', createDoctorOrder)
queueRouter.get('/queue/user', userRecords)
queueRouter.get('/queue/doctor', doctorRecords)

export = queueRouter

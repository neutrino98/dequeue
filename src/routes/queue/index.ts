import * as express from 'express'
import { createDoctorOrder } from '../../controllers/сreateDoctorOrder'
import { getUserRecording, getDoctorRecords } from '../../controllers/getMedicalRecords'

const queueRouter = express.Router()

queueRouter.post('/queue', createDoctorOrder)
queueRouter.get('/queue/user', getUserRecording)
queueRouter.get('/queue/doctor', getDoctorRecords)

export = queueRouter

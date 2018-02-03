import * as express from 'express'
import { createDoctorOrder } from '../../controllers/сreateDoctorOrder'
import { getUserRecording, getDoctorRecords } from '../../controllers/getMedicalRecords'
import { checkDoctor } from '../../middlewares/checkRole'

const queueRouter = express.Router()

queueRouter.post('/queue', createDoctorOrder)
queueRouter.get('/queue/user', getUserRecording)
queueRouter.get('/queue/doctor', checkDoctor, getDoctorRecords)

export = queueRouter

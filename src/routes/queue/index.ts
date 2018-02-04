import * as express from 'express'
import { createDoctorOrder } from '../../controllers/сreateDoctorOrder'
import { doctorRecords, userRecords } from '../../controllers/getMedicalRecords'
import checkAuth from '../../middlewares/authCheck'

const queueRouter = express.Router()

queueRouter.post('/queue', checkAuth, createDoctorOrder)
queueRouter.get('/queue/user', checkAuth, userRecords)
queueRouter.get('/queue/doctor', checkAuth, doctorRecords)

export = queueRouter

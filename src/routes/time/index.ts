import * as express from 'express'
import { doctorRecords } from '../../controllers/getMedicalRecords'
import { createDoctorOrder } from '../../controllers/сreateDoctorOrder'

const timeRouter = express.Router()

timeRouter.get('/time', doctorRecords)
timeRouter.post('/time', createDoctorOrder)

export = timeRouter

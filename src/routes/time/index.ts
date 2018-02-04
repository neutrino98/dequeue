import * as express from 'express'
import { createDoctorOrder } from '../../controllers/сreateDoctorOrder'
import { freeTimeByDoctorIdAndDate } from '../../controllers/freeTimeByDoctorIdAndDate';

const timeRouter = express.Router()

timeRouter.get('/time', freeTimeByDoctorIdAndDate)
timeRouter.post('/time', createDoctorOrder)

export = timeRouter

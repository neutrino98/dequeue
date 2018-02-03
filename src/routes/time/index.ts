import * as express from 'express'
import { queriesByDoctorIdAndDate } from '../../controllers/queriesByDoctorIdAndDate'
import { userRecords, doctorRecords } from '../../controllers/getMedicalRecords'

const timeRouter = express.Router()

timeRouter.get('/time', doctorRecords)

export = timeRouter

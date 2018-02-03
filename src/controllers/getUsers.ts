import { Request, Response } from 'express'
import { successRes, serverErrRes } from '../utils/responses'
import { diagnosis } from '../services/apiMedic'
import User, { idDoctorSpecialty } from '../models/User'
import * as _ from 'lodash'

const paginationCount = 3

export async function getUsers (req: Request, res: Response) {
  const { query: { doctorSpecialty, symptom } } = req
  if (doctorSpecialty) {
    const doctors = await User.find({ where: { doctorSpecialty } })
    return res.status(200).json(successRes({ doctors }))
  } else if (symptom) {
    const diagnosisResult = await diagnosis(symptom, res.locals.user)
    const specialties = diagnosisResult.Specialisation.map(specialist => idDoctorSpecialty[specialist.ID])
    const doctors = await User.find({
      $or: specialties.map(specialty => ({ doctorSpecialty: specialty }))
    })
    return res.status(200).send(successRes({ doctors }))
  }
  res.status(500).json(serverErrRes())
}

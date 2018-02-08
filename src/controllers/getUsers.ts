import { Request, Response } from 'express'
import { serverErrRes, successRes } from '../utils/responses'
import { diagnosis } from '../services/apiMedic'
import User, { idDoctorSpecialty } from '../models/User'

export async function getUsers (req: Request, res: Response) {
  const { params: { doctorSpecialty, symptom } } = req
  console.log(res.locals.user)
  if (doctorSpecialty) {
    const doctors = await User.find({ doctorSpecialty })
    return res.status(200).json(successRes({ doctors }))
  } else if (symptom) {
    const diagnosisResult = await diagnosis(symptom, res.locals.user)
    const specialties = diagnosisResult.Specialisation.map(specialist => idDoctorSpecialty[specialist.ID])
    console.log(specialties)
    const doctors = await User.find({
      $or: specialties.map(specialty => ({ doctorSpecialty: specialty }))
    })
    return res.status(200).send(successRes({ doctors }))
  }
  res.status(500).json(serverErrRes())
}

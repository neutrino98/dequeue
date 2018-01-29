import { Request, Response } from 'express'
import { successRes, failRes, serverErrRes } from '../utils/responses'
import { Error, NativeError, ValidationError } from 'mongoose'
import { Role } from '../models/User'
import DoctorModel from '../models/Doctor'
import * as _ from 'lodash'

export async function registerDoctor ({ body }: Request, res: Response) {
  let doctor = _.pick(body, ['name', 'surname', 'mobile', 'email', 'password',
    'role', 'doctorSpecialty', 'doctorCategory', 'placeOfWork' ])
  if (doctor.role === Role.Admin) {
    return res.status(400).json(failRes("You can't sign up as admin"))
  }
  try {
    const newDoctor = await DoctorModel.create(doctor)
    res.status(201).json(successRes({ user: _.omit(doctor, ['password']) }))
  } catch (e) {
    if (e.code === 11000) {
      return res.status(400).json(failRes('Doctor with such email is already exist'))
    }
    if (e.name === 'ValidationError') {
      return res.status(400).json(failRes(e.toString()))
    }
    res.status(500).json(serverErrRes())
  }

}

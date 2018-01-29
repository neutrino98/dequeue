import DoctorModel from '../models/Doctor'
import { Request, Response } from 'express'
import { successRes, failRes, serverErrRes } from '../utils/responses'

export async function profileDoctor ({ params }: Request, res: Response) {
  try {
    let doctor = await DoctorModel.findOne({ _id: params.id })
    if (!doctor) {
      res.status(404).json(failRes('No such user'))
    }
    res.status(200).json(successRes(doctor))
  } catch (e) {
    res.status(500).json(serverErrRes())
  }
}

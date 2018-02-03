import { Request, Response } from 'express'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import QueueModel, { queueKeys } from '../models/Queue'
import UserModel, { Role } from '../models/User'
import * as _ from 'lodash'

export async function createDoctorOrder (req: Request, res: Response) {
  if (await UserModel.find({ doctorId: req.body.doctorId, role: Role.Doctor }) === undefined) {
    return res.status(400).json(failRes('No such doctor!'))
  }
  const queue = {
    patientId: res.locals.user._id,
    doctorId: req.body.doctorId,
    timeOfRecording: req.body.timeOfRecording,
    timeOfAppointment: req.body.timeOfAppointment
  }
  try {
    const newQueue = await QueueModel.create(queue)
    res.status(201).json(successRes(newQueue))
  } catch (e) {
    if (e.name === 'ValidationError') {
      return res.status(400).json(failRes(e.toString()))
    }
    res.status(500).json(serverErrRes())
  }
}

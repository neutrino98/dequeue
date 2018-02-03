import { Request, Response } from 'express'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import QueueModel, { queueKeys } from '../models/Queue'
import UserModel, { Role } from '../models/User'
import * as moment from 'moment'
import * as _ from 'lodash'

export async function createDoctorOrder ({ body }: Request, res: Response) {
  const doctor = await UserModel.find({ doctorId: body.doctorId, role: Role.Doctor })
  if (!doctor) {
    return res.status(400).json(failRes('No such doctor!'))
  }
  const queue = {
    patientId: res.locals.user._id,
    doctorId: body.doctorId,
    from: body.from,
    to: moment(body.from).add(doctor.sessionTime, 'mins'),
    busy: true
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

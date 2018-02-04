import { Request, Response } from 'express'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import QueueModel from '../models/Queue'
import UserModel, { Role } from '../models/User'
import * as moment from 'moment'

export async function createDoctorOrder ({ body }: Request, res: Response) {

  const doctor = await UserModel.findOne({ _id: body.doctorId, role: Role.Doctor })
  if (!doctor) {
    return res.status(400).json(failRes('No such doctor!'))
  }

  const queue = {
    patientId: res.locals.user._id,
    doctorId: body.doctorId,
    date: moment(body.date, 'YYYY-MM-DD hh:mm'),
    from: moment(body.from, 'hh:mm'),
    to: moment(moment(body.from, 'hh:mm').add(doctor.sessionTime, 'mins')).format('hh:mm')
  }

  if (moment(doctor.startTime).isBefore(queue.from) || moment(doctor.finishTime).isAfter(queue.from)) {
    return res.status(400).json(failRes('Time is not in range'))
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

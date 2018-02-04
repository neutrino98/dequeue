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

  const fromDate = moment(body.from, 'YYYY-MM-DD HH:mm')
  const toDate = fromDate.add(doctor.sessionTime, 'minutes')

  const queue = {
    patientId: res.locals.user._id.toString(),
    doctorId: body.doctorId,
    from: body.from,
    to: toDate.format('YYYY-MM-DD HH:mm')
  }

  if (moment(doctor.startTime).isBefore(fromDate) || moment(doctor.finishTime).isAfter(toDate)) {
    return res.status(400).json(failRes('Time is not in range'))
  }
  console.log('Doctor: ', doctor)
  console.log('Queue: ', queue)

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

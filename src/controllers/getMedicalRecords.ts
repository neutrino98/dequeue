import { Response, Request } from 'express'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import QueueModel from '../models/Queue'
import User from '../models/User'

export async function userRecords (req: Request, res: Response) {
  try {
    console.log('RES: ', res)
    const queueries = await QueueModel.find({ patient_id: res.locals.user._id })
    if (!queueries) {
      return res.status(404).json(failRes('No records!'))
    }
    return res.status(200).json(successRes(queueries))
  } catch (e) {
    return res.status(500).json(serverErrRes())
  }
}

export async function doctorRecords (req: Request, res: Response) {
  try {
    const queueries = await QueueModel.find({ doctorId: res.locals.user._id })
    const users = await User.find({ $or: queueries.map(queue => ({ _id: queue.patientId })) })
    console.log(users)
    res.status(200).json(successRes({ users }))
  } catch (e) {
    console.log(e.toString())
    res.status(500).json(serverErrRes())
  }
}

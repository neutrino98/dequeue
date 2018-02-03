import { Response } from 'express'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import QueueModel from '../models/Queue'

export async function userRecords (res: Response) {
  try {
    console.log(res.locals)
    const queueries = await QueueModel.find({ patient_id: res.locals.user._id })
    if (!queueries) {
      return res.status(404).json(failRes('No records!'))
    }
    res.status(200).json(successRes(queueries))
  } catch (e) {
    res.status(500).json(serverErrRes())
  }
}

export async function doctorRecords (res: Response) {
  try {
    const queueries = await QueueModel.find({ doctor_id: res.locals.user._id })
    if (!queueries) {
      return res.status(404).json(failRes('No records!'))
    }
    res.status(200).json(successRes(queueries))
  } catch (e) {
    res.status(500).json(serverErrRes())
  }
}

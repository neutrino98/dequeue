import { Request, Response } from 'express'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import QueueModel from '../models/Queue'

export async function getUserRecording (req: Request, res: Response) {
  try {
    const queueries = QueueModel.find({ patient_id: req.user._id })
    res.status(200).json(successRes(queueries))
  } catch (e) {
    res.status(500).json(serverErrRes())
  }
}

export async function getDoctorRecords (req: Request, res: Response) {
  try {
    const queueries = QueueModel.find({ doctor_id: req.user._id })
    res.status(200).json(successRes(queueries))
  } catch (e) {
    res.status(500).json(serverErrRes())
  }
}

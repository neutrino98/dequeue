import { Request, Response } from 'express'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import QueueModel from '../models/Queue'

export async function doctorRecordsByid ({ body }: Request, res: Response) {
  try {
    const queueries = await QueueModel.findById(body.id)
    if (!queueries) {
      return res.status(404).json(failRes('No records!'))
    }
    res.status(200).json(successRes(queueries))
  } catch (e) {
    res.status(500).json(serverErrRes())

  }
}

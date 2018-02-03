import { Request, Response } from 'express'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import QueueModel from '../models/Queue'

export async function queriesByDoctorIdAndDate ({ params }: Request, res: Response) {
  const { date, doctorId } = params
  try {
    const queries = await QueueModel.find({ date: date, doctorId: doctorId })
    if (!queries) {
      return res.status(404).json(failRes('No such queries'))
    }
    res.status(200).json(successRes(queries))
  } catch (e) {
    res.status(500).json(serverErrRes())
  }
}

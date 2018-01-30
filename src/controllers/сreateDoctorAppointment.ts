import { Request, Response } from 'express'
import { successRes, failRes, serverErrRes } from '../utils/responses'
import QueueModel from '../models/Queue'
import * as _ from 'lodash'

export async function createDoctorAppointment ({ body }: Request, res: Response) {
  let queue = _.pick(body, ['doctor', 'patient', 'timeOfRecording', 'timeOfAppointment' ])
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

import { Request, Response } from 'express'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import QueueModel, { queueKeys } from '../models/Queue'
import * as _ from 'lodash'

export async function createDoctorAppointment ({ body }: Request, res: Response) {
  const queue = _.pick(body, queueKeys)
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

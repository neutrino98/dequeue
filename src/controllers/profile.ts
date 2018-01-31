import UserModel from '../models/User'
import { Request, Response } from 'express'
import { failRes, serverErrRes, successRes } from '../utils/responses'

export async function profile ({ params }: Request, res: Response) {
  try {
    const user = await UserModel.findOne({ _id: params.id })
    if (!user) {
      res.status(404).json(failRes('No such user'))
    }
    res.status(200).json(successRes(user))
  } catch (e) {
    res.status(500).json(serverErrRes())
  }
}

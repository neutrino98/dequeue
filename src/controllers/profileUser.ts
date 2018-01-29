import UserModel from '../models/User'
import { Request, Response } from 'express'
import { successRes, failRes, serverErrRes } from '../utils/responses'

export async function profileUser ({ params }: Request, res: Response) {
  try {
    let user = await UserModel.findOne({ _id: params.id })
    if (!user) {
      res.status(404).json(failRes('No such user'))
    }
    res.status(200).json(successRes(user))
  } catch (e) {
    res.status(500).json(serverErrRes())
  }
}

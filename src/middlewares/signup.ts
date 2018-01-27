import { Request, Response, NextFunction } from 'express'
import UserModel, { Role } from '../models/User'
import { successRes, failRes } from '../utils/responses'

export const checkRole = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.role === Role.Admin) {
    return res.status(400).json(failRes("You can't sign up as admin"))
  }
  next()
}

export async function checkExistEmail (req: Request, res: Response, next: NextFunction) {
  const user = await UserModel.find({ 'email': req.body.email })
  if (user[0] !== undefined) {
    return res.status(409).json(failRes('Email is already exist'))
  }
  next()
}

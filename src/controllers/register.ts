import { Request, Response } from 'express'
import UserModel, { Role } from '../models/User'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import { ValidationError } from 'mongoose'
import * as _ from 'lodash'

export async function register ({ body }: Request, res: Response) {
  const user = _.pick(body, ['name', 'surname', 'mobile', 'email', 'password', 'role'])
  if (user.role === Role.Admin) {
    return res.status(400).json(failRes("You can't sign up as admin"))
  }
  try {
    const newUser = await UserModel.create(user)
    res.status(201).json(successRes({ user: _.omit(user, ['password']) }))
  } catch (e) {
    if (e.code === 11000) {
      return res.status(400).json(failRes('User with such email is already exist'))
    }
    if (e.name === 'ValidationError') {
      return res.status(403).json(failRes(e.toString()))
    }
    res.status(500).json(serverErrRes())
  }
}

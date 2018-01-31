import { Request, Response } from 'express'
import UserModel, { Doctor, Role, User } from '../models/User'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import { keys } from 'ts-transformer-keys'
import { ValidationError } from 'mongoose'
import * as _ from 'lodash'

export async function register ({ body }: Request, res: Response) {
  const user = _.pick(body, body['doctorSpecialty'] ? keys<Doctor>() : keys<User>())
  if (user.role === Role.Admin) {
    return res.status(400).json(failRes('You can\'t sign up as admin'))
  }
  try {
    await UserModel.create(user)
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

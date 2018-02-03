import { Request, Response } from 'express'
import UserModel, { doctorKeys, Role, userKeys } from '../models/User'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import { ValidationError } from 'mongoose'
import * as _ from 'lodash'

export async function register ({ body }: Request, res: Response) {
  console.log('body: ', body)
  const user = _.pick(body, body['doctorSpecialty'] ? doctorKeys : userKeys)
  console.log('User: ', user)
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

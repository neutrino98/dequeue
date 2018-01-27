import { Request, Response } from 'express'
import UserModel, { User, Role } from '../models/User'
import { successRes, failRes } from '../utils/responses'
import { Error } from 'mongoose'
import * as _ from 'lodash'
import { sha512 } from '../utils/sha512'
import { checkRole } from '../middlewares/signup'

export async function signup ({ body }: Request, res: Response) {
  let user = {
    ..._.pick(body, ['name', 'surname', 'mobile', 'email', 'password', 'role'])
  }

  try {
    await UserModel.create(user)
    user.password = sha512(user.password).passwordHash
    res.status(200).json(successRes({ user }))
  } catch (e) {
    res.status(500).json(failRes(e.message))
  }
}

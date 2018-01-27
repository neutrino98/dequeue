import { Request, Response } from 'express'
import UserModel, { User, Role } from '../models/User'
import { successRes, failRes } from '../utils/responses'
import { sha512 } from '../utils/sha512'
import { Error } from 'mongoose'
import * as _ from 'lodash'

export async function signup ({ body }: Request, res: Response) {
  let user = {
    ..._.pick(body, ['name', 'surname', 'login', 'mobile', 'email', 'role']),
    password: sha512(body.password).passwordHash
  }

  if (user.role === Role.Admin) {
    res.status(400).json(failRes("You can't sign up as admin"))
  }

  try {
    await UserModel.create(user)
    res.status(200).json(successRes({ user }))
  } catch (e) {
    res.json(failRes(e.name))
  }
}

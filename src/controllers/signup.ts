import { Request, Response } from 'express'
import UserModel, { User, Role } from '../models/User'
import { successRes, failRes } from '../utils/responses'
import { Error } from 'mongoose'
import * as _ from 'lodash'
import { sha512 } from '../utils/sha512'

export async function signup ({ body }: Request, res: Response) {
  let user = {
    ..._.pick(body, ['name', 'surname', 'mobile', 'email', 'password', 'role'])
  }

  if (user.role === Role.Admin) {
    return res.status(400).json(failRes("You can't sign up as admin"))
  }

  if ((await UserModel.find({ 'email': user.email }))[0] !== undefined) {
    return res.status(409).json(failRes('Email is already exist'))
  }

  try {
    const newUser = await UserModel.create(user)
    user.password = sha512(user.password).passwordHash
    res.status(200).json(successRes({ user }))
  } catch (e) {
    console.log(e)
    res.status(500).json(failRes(e.message))
  }
}

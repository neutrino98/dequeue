import { Request, Response } from 'express'
import UserModel from '../models/User'
import { successRes, failRes } from '../utils/responses'
import { sha512 } from '../utils/sha512'
import { Error } from 'mongoose'

export async function signup (req: Request, res: Response) {
  const user = {
    name: req.body.name,
    surname: req.body.surname,
    login: req.body.login,
    password: sha512(req.body.password).passwordHash,
    mobile: req.body.mobile,
    email: req.body.email,
    role: req.body.role
  }
  try {
    await new UserModel(
        user
    ).save()
    res.json(successRes({ user }))
  } catch (e) {
    res.json(failRes(e.name))
  }

}

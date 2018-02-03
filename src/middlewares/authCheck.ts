import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import User from '../models/User'

export default async function checkAuth (req: Request, res: Response, next: NextFunction) {
  const authorization = req.headers.authorization as string
  if (!authorization) return res.sendStatus(401)
  const token = authorization.split(' ')[1]
  const payload = jwt.verify(token, process.env.JWT_SECRET) as any
  const user = await User.findById(payload.id)
  if (!user) {
    return res.sendStatus(401)
  }
  res.locals.user = user
  next()
}

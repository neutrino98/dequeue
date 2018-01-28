import * as passport from 'passport'
import { Request, Response, NextFunction } from 'express'
import { successRes, failRes } from '../utils/responses'

export async function login (req: Request, res: Response, next: NextFunction) {
  passport.authenticate('local', (error, token, user) => {
    if (error) {
      return res.status(401).json(failRes(error))
    }
    if (!user) {
      return res.status(401).json(failRes('No such user'))
    }
    res.json(successRes({ user, token }))
  })(req, res, next)
}

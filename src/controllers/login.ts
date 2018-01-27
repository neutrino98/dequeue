import * as passport from 'passport'
import { Request, Response, NextFunction } from 'express'
import { successRes, failRes } from '../utils/responses'

export async function login (req: Request, res: Response, next: NextFunction) {
  passport.authenticate('local', (error, token, user) => {
    if (error) {
      res.status(401).json(failRes(error))
    }
    if (!user) {
      res.status(401).json(failRes('No such user'))
    }
    res.json(successRes({ user: user, token: token }))
  })(req, res, next)
}

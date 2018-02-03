import { Request, Response, NextFunction } from 'express'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import { Role } from '../models/User'

export const checkDoctor = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json(failRes('User is unauthorized'))
    if (req.user.role !== Role.Doctor) return res.status(403).json(failRes('Forbidden!!'))
    next()
  }
}

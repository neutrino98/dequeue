import { Request, Response } from 'express'
import { successRes, failRes, serverErrRes } from '../utils/responses'
import DoctorModel from '../models/Doctor'
import * as _ from 'lodash'

const paginationCount = 3

export async function getDoctors ({ query }: Request, res: Response) {
  const prevCursor = ~~query.cursor || 0
  const search = query.search
  const pagesCount = await DoctorModel.find().count() / paginationCount

  let cursor = prevCursor >= 0 && prevCursor < pagesCount - 1 ? prevCursor + 1 : null
  console.log(cursor)
  if (prevCursor <= pagesCount - 1 || prevCursor >= 0) {
    const doctors = await DoctorModel.find().skip(prevCursor * paginationCount).limit(paginationCount)
    res.json(successRes({ doctors, cursor }))
  } else {
    res.json({ cursor })
  }
}

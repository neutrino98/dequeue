import { Request, Response } from 'express'
import { successRes } from '../utils/responses'
import DoctorModel from '../models/Doctor'
import { searchModels } from '../utils/searchModels'

const paginationCount = 3

export async function getDoctors ({ query }: Request, res: Response) {
  const prevCursor = ~~query.cursor || 0
  const search = query.search
  const pagesCount = await DoctorModel.find().count() / paginationCount

  let cursor = prevCursor >= 0 && prevCursor < pagesCount - 1 ? prevCursor + 1 : null
  if (prevCursor <= pagesCount - 1 || prevCursor >= 0) {
    const doctors = (await searchModels(DoctorModel, search, prevCursor, paginationCount)).models
    res.json(successRes({ doctors, cursor }))
  } else {
    res.json({ cursor })
  }
}

import { Request, Response } from 'express'
import { successRes } from '../utils/responses'
import { searchModels } from '../utils/searchModels'
import UserModel from '../models/User'

const paginationCount = 3

export async function getDoctors ({ query }: Request, res: Response) {
  const prevCursor = ~~query.cursor || 0
  const search = query.search
  const pagesCount = await UserModel.find().count() / paginationCount

  let cursor = prevCursor >= 0 && prevCursor < pagesCount - 1 ? prevCursor + 1 : null
  if (prevCursor <= pagesCount - 1 || prevCursor >= 0) {
    const doctors = (await searchModels(UserModel, search, prevCursor, paginationCount)).models
    res.json(successRes({ doctors, cursor }))
  } else {
    res.json({ cursor })
  }
}
